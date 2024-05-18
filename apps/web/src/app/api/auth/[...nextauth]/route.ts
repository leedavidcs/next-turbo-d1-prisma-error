import type { ServerRuntime } from "next";
import { handlers } from "../../../../server/auth";

export const runtime: ServerRuntime = "edge";

export const { GET, POST } = handlers;
