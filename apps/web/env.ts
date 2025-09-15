import { createEnv } from "@t3-oss/env-nextjs";
import { keys as core } from "@repo/next-config/keys";
import { keys as observe } from "@repo/observability/keys";
export const env = createEnv({
  extends: [core(), observe()],
  server: {},
  client: {},
  runtimeEnv: {},
});
