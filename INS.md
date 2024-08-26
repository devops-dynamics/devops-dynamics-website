# Getting Started

To run this website in your local, your system must have Node.js LTS installed.

## 1. Clone the repo

Firstly, clone the github repo to your local system.

```
git clone "https://github.com/devops-dynamics/devops-dynamics-website"
cd ""devops-dynamics-website"
```

## 2. Run this command to install all the dependencies

```
npm install
```

## 3. Configure environment variables

Create a `.env.local` file in the root directory and add your environment variables.

| key                           | value               | note                                              |
| ----------------------------- | ------------------- | ------------------------------------------------- |
| DATABASE_URL                  | <your_database_url> | Supabase Database URL                             |
| DIRECT_URL                    | <your_direct_url>   | Supabase Direct URL                               |
| TOKEN_SECRET                  | <your_token_secret> | Token secret for authentication                   |
| BASE_URL                      | <your_base_url>     | For local development use "http://localhost:3000" |
| NEXT_PUBLIC_BASE_URL          | <your_base_url>     | same as base url                                  |
| NEXT_PUBLIC_SUPABASE_URL      | <supabase_api_key>  | Project URL                                       |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | <supabase_anon_key> | Public Anon Key                                   |

_You can follow the `.env.example` file._

## 4. Run the development server

```
npm run dev
```

-   ## To build the application run the following command

    ```
    npm run build
    ```

-   ## To start the server run the following command

    ```
    npm run start
    ```

# Additional Information

## Configuring Supabase Environment Variables

1. First Login to your Supabase Account and Go to Dashboard
   https://supabase.com/

2. Click on `New Project` and Choose Organization (if not already created , create one).

3. Fill the details (project name, database password & region) and click on `Create New Project`.

4. After finishing setting up the project, Click on `Connect`

5. In the `URI` tab, set the `Mode` to `Transaction` and copy the URI string. Paste it into your `.env.local` file & this will be your `DATABASE_URL`. Replace `[YOUR-PASSWORD]` with your database password.

    - Append `?pgbouncer=true&connection_limit=1` to the end of the connection string.

    - **Note:** The `connection_limit=1` parameter is only required if you are using Prisma from a serverless environment.

    ```
    DATABASE_URL="postgres://[db-user].[project-ref]:[db-password]@aws-0-[aws-region].pooler.supabase.com:6543/[db-name]?pgbouncer=true&connection_limit=1"

    ```

6. Now set the `Mode` to `Session` and copy the URI string. Paste it into your .env.local file & This will be your `DIRECT_URL`. Replace `[YOUR-PASSWORD]` with your database password.

    ```
    DIRECT_URL="postgres://[db-user].[project-ref]:[db-password]@aws-0-[aws-region].pooler.supabase.com:5432/[db-name]"
    ```

7. Now from side bar select `Project Settings` and go to `API` in configuration section.

8. Copy the `Project URL` and paste it into your .env file as `NEXT_PUBLIC_SUPABASE_URL`

9. Again use the `public` `anon` key from `Project API Keys` as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

For more details visit : https://supabase.com/partners/integrations/prisma

## Creating Storage Bucket & Updating Image Remote Patterns

1. From side bar, Go to `Storage` and create a new bucket.

2. Name the bucket, **check** `Public Bucket` and Save it.

3. Now update `Policies`.

4. Add bucket name to `.env` file.

5. Edit the next.config.mjs file (optional).

# Using GitHub Actions for Testing Commits

This project uses GitHub Actions for continuous integration (CI) and to automate testing of commits. Here’s how you can use it:

## 1. Triggering the Workflow

### Automatic Trigger

The GitHub Actions workflow automatically triggers on every push to the `staging` branch. The build process will:

-   Checkout the code from the repository.
-   Set up Docker and build the Docker image.
-   Run tests and ensure the build succeeds.

### Manual Trigger

You can manually trigger the workflow using the `workflow_dispatch` event, which is useful for testing specific commits or branches.

To manually trigger the workflow:

1. Go to the **Actions** tab in your GitHub repository.
2. Select the “Staging - Build Docker Image” workflow.
3. Click on the “Run workflow” button and specify the branch and commit ID to use in the image tag.

## 2. Running Tests Locally

Before pushing your code, run tests locally to catch any issues early:

```bash
npm test
```

Make sure all tests pass before pushing your changes.

## 3. Reviewing the Workflow Status

After pushing your code, review the status of the GitHub Actions workflow:

-   Go to the **Actions** tab in your GitHub repository.
-   Select the relevant workflow run to see the details.
-   Review the logs to ensure the build and tests have passed.

## 4. Debugging Failures

If the workflow fails:

-   Review the logs in the GitHub Actions workflow for any error messages.
-   Fix the issues in your code or configuration.
-   Push the changes again, which will automatically re-trigger the workflow.
