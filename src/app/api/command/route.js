import { NextResponse } from "next/server";
import { z } from "zod";

const commandSchema = z.object({
  command: z.enum(["START", "STOP", "RESUME", "MANUAL_PLANT", "MOVE", "DRILL", "APPLY_CONFIGURATION"]),
  payload: z.record(z.any()).default({}),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = commandSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid command payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const esp32BaseUrl = process.env.ESP32_BASE_URL;
    if (!esp32BaseUrl) {
      return NextResponse.json({ ok: false, error: "ESP32_BASE_URL is not configured" }, { status: 500 });
    }

    const response = await fetch(`${esp32BaseUrl}/command`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    const ackText = await response.text();

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      ack: ackText,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
