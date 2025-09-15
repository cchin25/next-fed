import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    extends: [],
    server: {
      NEXT_TELEMETRY_DISABLED: z.string(),
      ANALYZE: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_WEB_URL: z.url(),
    },
    runtimeEnv: {
      NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,
      ANALYZE: process.env.ANALYZE,
      NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    },
  });
