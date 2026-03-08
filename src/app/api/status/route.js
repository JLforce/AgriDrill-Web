import { NextResponse } from "next/server";

export async function GET() {
  const checks = {
    supabaseUrlConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    supabaseAnonConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    serviceRoleConfigured: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    esp32BaseUrlConfigured: Boolean(process.env.ESP32_BASE_URL),
  };

  return NextResponse.json({
    ok: true,
    service: "agridrill-web",
    timestamp: new Date().toISOString(),
    checks,
  });
}
