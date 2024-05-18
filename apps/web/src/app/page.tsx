import type { ServerRuntime } from "next";
import type { FC } from "react";
import { LoginButton } from "../client/components/LoginButton";

export const runtime: ServerRuntime = "edge";

const Page: FC = () => {
    return (
        <main>
            <LoginButton />
        </main>
    );
};

export default Page;
