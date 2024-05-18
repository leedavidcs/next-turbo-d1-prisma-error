import { PrismaAdapter } from "@auth/prisma-adapter";
import { getRequestContext } from "@cloudflare/next-on-pages";
import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";
import { getPrisma } from "../db";
import { env } from "../env";

export const { auth, handlers, signIn, signOut } = NextAuth(() => {
    const cf = getRequestContext();
    const prisma = getPrisma(cf.env);

    return {
        adapter: PrismaAdapter(prisma) as Adapter,
        pages: {
            signIn: "/login",
            signOut: "/signup",
        },
        providers: [
            GitHubProvider({
                authorization: {
                    params: {
                        scope: "read:user user:email",
                    },
                },
                clientId: env.GITHUB_CLIENT_ID,
                clientSecret: env.GITHUB_CLIENT_SECRET,
                profile: (profile) => ({
                    id: profile.id.toString(),
                    name: profile.login as string,
                    email: profile.email as string,
                    image: profile.avatar_url as string,
                }),
            }),
        ],
        session: {
            strategy: "jwt",
        },
    };
});
