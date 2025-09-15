import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    extends: [],
    server: {
      OTEL_EXPORTER_OTLP_ENDPOINT: z.string().optional(),
      OTEL_EXPORTER_OTLP_HEADERS: z.string().optional(),
    },
    client: {},
    runtimeEnv: {
      OTEL_EXPORTER_OTLP_ENDPOINT: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
      OTEL_EXPORTER_OTLP_HEADERS: process.env.OTEL_EXPORTER_OTLP_HEADERS,
    },
  });
