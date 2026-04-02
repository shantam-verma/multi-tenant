import { hasRedisConfig, redis } from "@/lib/redis";

export function isValidIcon(str: string) {
  if (str.length > 10) {
    return false;
  }

  try {
    // Primary validation: Check if the string contains at least one emoji character
    // This regex pattern matches most emoji Unicode ranges
    const emojiPattern = /[\p{Emoji}]/u;
    if (emojiPattern.test(str)) {
      return true;
    }
  } catch (error) {
    // If the regex fails (e.g., in environments that don't support Unicode property escapes),
    // fall back to a simpler validation
    console.warn(
      "Emoji regex validation failed, using fallback validation",
      error,
    );
  }

  // Fallback validation: Check if the string is within a reasonable length
  // This is less secure but better than no validation
  return str.length >= 1 && str.length <= 10;
}

type SubdomainData = {
  emoji: string;
  createdAt: number;
};

const demoSubdomains: Array<{ subdomain: string } & SubdomainData> = [
  {
    subdomain: "acme",
    emoji: "🏢",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
  },
  {
    subdomain: "studio",
    emoji: "🎨",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
  },
  {
    subdomain: "labs",
    emoji: "🧪",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
];

export async function getSubdomainData(subdomain: string) {
  const sanitizedSubdomain = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, "");

  if (!hasRedisConfig || !redis) {
    const demoTenant = demoSubdomains.find(
      (tenant) => tenant.subdomain === sanitizedSubdomain,
    );
    return demoTenant
      ? { emoji: demoTenant.emoji, createdAt: demoTenant.createdAt }
      : null;
  }

  const data = await redis.get<SubdomainData>(
    `subdomain:${sanitizedSubdomain}`,
  );
  return data;
}

export async function getAllSubdomains() {
  if (!hasRedisConfig || !redis) {
    return demoSubdomains;
  }

  const keys: string[] = await redis.keys("subdomain:*");

  if (!keys.length) {
    return [];
  }

  const values = (await redis.mget<SubdomainData>(
    ...keys,
  )) as Array<SubdomainData | null>;

  return keys.map((key, index) => {
    const subdomain = key.replace("subdomain:", "");
    const data = values[index];

    return {
      subdomain,
      emoji: data?.emoji || "❓",
      createdAt: data?.createdAt || Date.now(),
    };
  });
}
