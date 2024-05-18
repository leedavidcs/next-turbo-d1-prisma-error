import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createJiti from "jiti";
import { fileURLToPath } from "url";

const fileUrlPath = fileURLToPath(import.meta.url);
const jiti = createJiti(fileUrlPath);

jiti("./src/env");

/**
 * @description Here we use the @cloudflare/next-on-pages next-dev module to allow us to use
 * bindings during local development (when running the application with `next dev`), for more
 * information see: https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
 */
if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ["@repo/ui"],
};

export default config;
