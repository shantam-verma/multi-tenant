// import { Redis } from "@upstash/redis";

export const hasRedisConfig =
  Boolean(process.env.KV_REST_API_URL) &&
  Boolean(process.env.KV_REST_API_TOKEN);

export const redis = hasRedisConfig ? null : null;
