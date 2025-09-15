import { registerOTel } from "@vercel/otel";
import {
  AlwaysOnSampler,
  TraceIdRatioBasedSampler,
} from "@opentelemetry/sdk-trace-node";
export function register() {
  registerOTel({
    serviceName: "next-app",
    traceSampler:
      process.env.NODE_ENV === "development"
        ? new AlwaysOnSampler()
        : new TraceIdRatioBasedSampler(0.1),
  });
}
