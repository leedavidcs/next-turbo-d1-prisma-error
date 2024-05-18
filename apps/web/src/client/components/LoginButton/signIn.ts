"use server";

import { signIn as authSignIn } from "../../../server/auth";

export interface SignInParams {
    callbackUrl?: string;
    redirect?: boolean;
}

export const signIn = async (params: SignInParams = {}) => {
    const { callbackUrl, redirect } = params;

    await authSignIn("github", {
        redirect,
        redirectTo: callbackUrl,
    });
};
