import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        AUTH_SECRET: z.string(),
        AUTH_URL: z.string().optional(),
        GITHUB_CLIENT_ID: z.string(),
        GITHUB_CLIENT_SECRET: z.string(),
        NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    },
    runtimeEnv: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        AUTH_URL: process.env.AUTH_URL,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        NODE_ENV: process.env.NODE_ENV,
    },
    client: {},
});
