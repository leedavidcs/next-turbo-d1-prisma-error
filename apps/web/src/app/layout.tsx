import type { ServerRuntime } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import type { FC, ReactNode } from "react";
import { auth } from "../server/auth";

export const runtime: ServerRuntime = "edge";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
    const session = await auth();

    return (
        <html lang="en">
            <body className={inter.className}>
                <div style={{
                    whiteSpace: "pre"
                }}>
                    {JSON.stringify(session, null, 4)}
                </div>
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
};

export default Layout;
