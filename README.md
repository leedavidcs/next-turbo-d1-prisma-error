# @cloudflare/next-on-pages + @prisma/adapter-d1 Repro

This repo is intended to be a minimal reproduction for https://github.com/prisma/prisma/issues/23929.

## Setup Instructions

1. Install dependencies:

```bash
# bash

pnpm install
```

2. Create a GitHub OAuth 2.0:
    1. Navigate to https://github.com/settings/applications/new
    2. Create a GitHub app with any name, url, and a callback url of: `http://localhost:3000/api/auth/callback/github`
    3. Generate a new client secret and record the Client ID and Client Secret to paste in a `.env` file.

3. Create your `.env` file:

```bash
# bash

cd ./apps/web
cp .env-example .env
cd ../../
```

4. Paste in your GitHub OAuth 2.0 Client ID and Client Secret in the .env file you've created.

5. Initialize d1
    1. Create d1
        ```bash
        # bash

        cd ./packages/prisma

        # Create your D1 database
        pnpm wrangler d1 create example

        cd ../../
        ```
    2. Copy your Cloudflare D1 database id
    3. Paste your database id in the wrangler.toml at the root of this project (replace `PASTE YOUR DATABASE_ID HERE`)

6. Apply the database migration

```bash
# bash

cd ./packages/prisma
pnpm migrate:apply:local
cd ../../
```

7. Build prisma

```bash
# bash

cd ./packages/prisma
pnpm build
cd ../../
```

8. Run the app and click the login button

```bash
#bash

cd ./apps/web
pnpm dev
```
