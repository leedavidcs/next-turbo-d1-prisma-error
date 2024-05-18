import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "@prisma/client";
import { env } from "../env";

export const getPrisma = (cfEnv: CloudflareEnv) => {
    const adapter = new PrismaD1(cfEnv.DB);
    const prisma = new PrismaClient({
        adapter,
        log: env.NODE_ENV === "development" ? ["query", "info", "warn", "error"] : [],
    });

    return prisma;
};

export type PrismaType = ReturnType<typeof getPrisma>;
