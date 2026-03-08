import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const telemetrySchema = z.object({
  session_id: z.string().uuid(),
  holes_drilled: z.number().int().nonnegative(),
  battery_percent: z.number().min(0).max(100),
  mode: z.enum(["AUTO", "MANUAL", "IDLE", "STOPPED"]),
  status: z.string().min(1).max(64),
  xte: z.number().optional(),
  payload: z.record(z.any()).optional(),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = telemetrySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid telemetry payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("telemetry_events").insert({
      session_id: parsed.data.session_id,
      holes_drilled: parsed.data.holes_drilled,
      battery_percent: parsed.data.battery_percent,
      mode: parsed.data.mode,
      status: parsed.data.status,
      xte: parsed.data.xte ?? null,
      payload: parsed.data.payload ?? {},
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
