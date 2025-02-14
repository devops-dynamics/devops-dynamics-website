terraform {
  required_providers {
    oci = {
      source  = "oracle/oci"
      version = "6.25.0"
    }
  }
}

provider "oci" {
  tenancy_ocid = var.tenancy_ocid
  user_ocid    = var.user_ocid
  private_key  = replace(var.private_key, "\\n", "\n")
  fingerprint  = var.fingerprint
  region       = var.region
}

# Create Virtual Cloud Network (VCN)
resource "oci_core_vcn" "devops_dynamics_vcn" {
  compartment_id = var.compartment_id
  cidr_blocks    = var.vcn_cidr_blocks
  display_name   = var.vcn_display_name
  dns_label      = var.vcn_dns_label
}

# Internet Gateway for Public Access
resource "oci_core_internet_gateway" "devops_igw" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.devops_dynamics_vcn.id
  display_name   = "devops_internet_gateway"
  enabled        = true
}

# Route Table for Internet Access
resource "oci_core_route_table" "devops_rt" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.devops_dynamics_vcn.id
  display_name   = "devops_route_table"

  route_rules {
    destination       = "0.0.0.0/0"
    destination_type  = "CIDR_BLOCK"
    network_entity_id = oci_core_internet_gateway.devops_igw.id
  }
}

# Security List (Allow SSH, HTTP, HTTPS)
resource "oci_core_security_list" "devops_security_list" {
  compartment_id = var.compartment_id
  vcn_id         = oci_core_vcn.devops_dynamics_vcn.id
  display_name   = "devops_security_list"

  # Allow inbound SSH
  ingress_security_rules {
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"

    tcp_options {
      min = 22
      max = 22
    }
  }

  # Allow HTTP (Port 80)
  ingress_security_rules {
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"

    tcp_options {
      min = 80
      max = 80
    }
  }

  # Allow HTTPS (Port 443)
  ingress_security_rules {
    protocol    = "6"
    source      = "0.0.0.0/0"
    source_type = "CIDR_BLOCK"

    tcp_options {
      min = 443
      max = 443
    }
  }

  # Allow all outbound traffic
  egress_security_rules {
    protocol    = "all"
    destination = "0.0.0.0/0"
  }
}

# Create Subnet for Compute Instances
resource "oci_core_subnet" "devops_subnet" {
  compartment_id        = var.compartment_id
  vcn_id               = oci_core_vcn.devops_dynamics_vcn.id
  cidr_block           = var.subnet_cidr_block
  display_name         = "devops_subnet"
  route_table_id       = oci_core_route_table.devops_rt.id
  security_list_ids    = [oci_core_security_list.devops_security_list.id]
  dns_label            = "devsubnet"
  prohibit_public_ip_on_vnic = false
}

# Fetch Availability Domains
data "oci_identity_availability_domains" "ads" {
  compartment_id = var.tenancy_ocid
}

# Create AMD Compute Instance for Production
resource "oci_core_instance" "prod_server" {
  compartment_id      = var.compartment_id
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[0].name
  shape              = "VM.Standard.E2.1.Micro"
  display_name       = "prod-server"

  create_vnic_details {
    subnet_id        = oci_core_subnet.devops_subnet.id
    assign_public_ip = true
  }

  source_details {
    source_type = "image"
    source_id   = var.image_ocid
  }

  metadata = {
    ssh_authorized_keys = replace(var.ssh_public_keys, "\\n", "\n")
  }
}

# Create AMD Compute Instance for Staging
resource "oci_core_instance" "staging_server" {
  compartment_id      = var.compartment_id
  availability_domain = data.oci_identity_availability_domains.ads.availability_domains[0].name
  shape              = "VM.Standard.E2.1.Micro"
  display_name       = "staging-server"

  create_vnic_details {
    subnet_id        = oci_core_subnet.devops_subnet.id
    assign_public_ip = true
  }

  source_details {
    source_type = "image"
    source_id   = var.image_ocid
  }

  metadata = {
    ssh_authorized_keys = replace(var.ssh_public_keys, "\\n", "\n")
  }
}
