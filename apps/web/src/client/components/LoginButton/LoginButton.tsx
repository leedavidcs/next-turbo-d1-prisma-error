"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { signIn } from "./signIn";

export const LoginButton: FC = () => {
    const router = useRouter();

    return (
        <button
            onClick={async () => {
                await signIn();

                router.refresh();
            }}
            type="button"
        >
            Login
        </button>
    );
};
