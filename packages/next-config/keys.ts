import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    extends: [],
    server: {
      NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
    },
    client: {
      NEXT_PUBLIC_WEB_URL: z.url(),
    },
    runtimeEnv: {
      NEXT_RUNTIME: process.env.NEXT_RUNTIME,
      NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    },
  });
