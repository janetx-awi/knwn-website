import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const MAX_SPOTS = parseInt(process.env.CONSULTATION_MAX_SPOTS ?? "8", 10);
const SPOTS_KEY = "consultation_spots";
const MONTH_KEY = "consultation_month";

function currentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export async function GET() {
  try {
    const storedMonth = await kv.get<string>(MONTH_KEY);
    const thisMonth = currentMonthKey();
    if (storedMonth !== thisMonth) {
      await kv.set(SPOTS_KEY, MAX_SPOTS);
      await kv.set(MONTH_KEY, thisMonth);
      return NextResponse.json({ spots: MAX_SPOTS });
    }
    const spots = await kv.get<number>(SPOTS_KEY);
    return NextResponse.json({ spots: spots ?? MAX_SPOTS });
  } catch {
    return NextResponse.json({ spots: MAX_SPOTS });
  }
}

export async function POST() {
  try {
    const storedMonth = await kv.get<string>(MONTH_KEY);
    const thisMonth = currentMonthKey();
    if (storedMonth !== thisMonth) {
      await kv.set(SPOTS_KEY, MAX_SPOTS - 1);
      await kv.set(MONTH_KEY, thisMonth);
      return NextResponse.json({ spots: MAX_SPOTS - 1 });
    }
    const current = (await kv.get<number>(SPOTS_KEY)) ?? MAX_SPOTS;
    const updated = Math.max(0, current - 1);
    await kv.set(SPOTS_KEY, updated);
    return NextResponse.json({ spots: updated });
  } catch {
    return NextResponse.json({ spots: MAX_SPOTS });
  }
}
