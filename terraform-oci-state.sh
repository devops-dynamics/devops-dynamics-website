#!/bin/bash
# Automate Terraform state file management in OCI with "pull" and "push" commands

BUCKET_NAME="devops-dynamics-terraform-state"
PROFILE="DEVOPS-DYNAMICS"
STATE_FILE="terraform.tfstate"
BACKUP_FILE="terraform.tfstate.backup"
REMOTE_FILE="terraform.tfstate.remote"

# Function to get object ETag (checksum) from OCI Storage
get_etag() {
    local object_name=$1
    oci os object head \
        --bucket-name "$BUCKET_NAME" \
        --name "$object_name" \
        --profile "$PROFILE" \
        --query 'etag' 2>/dev/null | tr -d '"'
}

# Ensure a valid argument is passed
if [[ $# -ne 1 ]]; then
    echo "❌ Error: No valid argument provided."
    echo "Usage: $0 <pull|push>"
    exit 1
fi

# 📥 **Pull Command: Download the latest Terraform state from OCI**
if [[ "$1" == "pull" ]]; then
    echo "📥 Downloading the latest Terraform state from OCI..."
    oci os object get \
        --bucket-name "$BUCKET_NAME" \
        --name "$STATE_FILE" \
        --file "$STATE_FILE" \
        --profile "$PROFILE" \
        2>/dev/null

    if [[ $? -eq 0 ]]; then
        echo "✅ Successfully pulled latest Terraform state from OCI."
    else
        echo "⚠️ No existing Terraform state found in OCI."
    fi
    exit 0
fi

# 🚀 **Push Command: Upload updated Terraform state**
if [[ "$1" == "push" ]]; then
    # Ensure Terraform state file exists before proceeding
    if [[ ! -f "$STATE_FILE" ]]; then
        echo "❌ Error: Terraform state file '$STATE_FILE' not found!"
        exit 1
    fi

    # Step 1: Download the current Terraform state for comparison
    echo "📥 Fetching the latest Terraform state from OCI..."
    oci os object get \
        --bucket-name "$BUCKET_NAME" \
        --name "$STATE_FILE" \
        --file "$REMOTE_FILE" \
        --profile "$PROFILE" \
        2>/dev/null || echo "ℹ️ No existing state file found in OCI."

    # Step 2: Compute local and remote checksums
    LOCAL_ETAG=$(openssl dgst -sha256 -binary "$STATE_FILE" | openssl base64)
    REMOTE_ETAG=""
    if [[ -f "$REMOTE_FILE" ]]; then
        REMOTE_ETAG=$(openssl dgst -sha256 -binary "$REMOTE_FILE" | openssl base64)
    fi

    # Remove the temporary remote state file
    rm -f "$REMOTE_FILE"

    # Step 3: If checksums match, skip upload
    if [[ "$LOCAL_ETAG" == "$REMOTE_ETAG" ]]; then
        echo "✅ No changes detected in Terraform state. Skipping upload."
        exit 0
    else
        echo "🔄 Changes detected in Terraform state! Updating OCI Storage..."

        # Step 4: Delete the old backup if it exists
        if get_etag "$BACKUP_FILE" &>/dev/null; then
            echo "🗑️ Removing old backup file from OCI..."
            oci os object delete \
                --bucket-name "$BUCKET_NAME" \
                --name "$BACKUP_FILE" \
                --force \
                --profile "$PROFILE"
        fi

        # Step 5: Rename current `terraform.tfstate` to `terraform.tfstate.backup`
        if [[ -n "$REMOTE_ETAG" ]]; then
            echo "📂 Renaming existing state file to backup in OCI..."
            oci os object rename \
                --bucket-name "$BUCKET_NAME" \
                --source-name "$STATE_FILE" \
                --new-name "$BACKUP_FILE" \
                --profile "$PROFILE"
        fi

        # Step 6: Upload the new Terraform state file
        echo "⬆️ Uploading new Terraform state to OCI..."
        oci os object put \
            --bucket-name "$BUCKET_NAME" \
            --file "$STATE_FILE" \
            --name "$STATE_FILE" \
            --profile "$PROFILE"

        echo "✅ Terraform state successfully updated in OCI!"
    fi
    exit 0
fi

# ❌ If an invalid argument is passed
echo "❌ Error: Invalid argument '$1'."
echo "Usage: $0 <pull|push>"
exit 1
