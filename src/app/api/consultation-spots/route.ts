import Redis from "ioredis";
import { NextResponse } from "next/server";

const MAX_SPOTS = parseInt(process.env.CONSULTATION_MAX_SPOTS ?? "8", 10);
const SPOTS_KEY = "consultation_spots";
const MONTH_KEY = "consultation_month";

function currentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

async function withRedis<T>(fn: (redis: Redis) => Promise<T>): Promise<T | null> {
  const url = process.env.knwn_kv_REDIS_URL;
  if (!url) return null;
  const redis = new Redis(url, { lazyConnect: true, enableOfflineQueue: false });
  try {
    await redis.connect();
    return await fn(redis);
  } finally {
    redis.disconnect();
  }
}

export async function GET() {
  try {
    const result = await withRedis(async (redis) => {
      const storedMonth = await redis.get(MONTH_KEY);
      const thisMonth = currentMonthKey();
      if (storedMonth !== thisMonth) {
        await redis.set(SPOTS_KEY, MAX_SPOTS);
        await redis.set(MONTH_KEY, thisMonth);
        return MAX_SPOTS;
      }
      const spots = await redis.get(SPOTS_KEY);
      return spots !== null ? parseInt(spots, 10) : MAX_SPOTS;
    });
    return NextResponse.json({ spots: result ?? MAX_SPOTS });
  } catch {
    return NextResponse.json({ spots: MAX_SPOTS });
  }
}

export async function POST() {
  try {
    const result = await withRedis(async (redis) => {
      const storedMonth = await redis.get(MONTH_KEY);
      const thisMonth = currentMonthKey();
      if (storedMonth !== thisMonth) {
        await redis.set(SPOTS_KEY, MAX_SPOTS - 1);
        await redis.set(MONTH_KEY, thisMonth);
        return MAX_SPOTS - 1;
      }
      const current = await redis.get(SPOTS_KEY);
      const updated = Math.max(0, (current !== null ? parseInt(current, 10) : MAX_SPOTS) - 1);
      await redis.set(SPOTS_KEY, updated);
      return updated;
    });
    return NextResponse.json({ spots: result ?? MAX_SPOTS });
  } catch {
    return NextResponse.json({ spots: MAX_SPOTS });
  }
}
