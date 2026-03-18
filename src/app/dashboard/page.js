import Image from "next/image";
import Link from "next/link";

const primaryNav = ["Dashboard", "Control", "Configuration", "Manual", "Logs"];
const secondaryNav = ["Settings", "Profile"];
const topNavLinks = ["Overview", "Telemetry", "Operations", "Diagnostics"];

const stats = [
  { label: "Holes Drilled", value: "1,240", hint: "+12% from session start" },
  { label: "Battery Level", value: "85%", hint: "Stable output" },
  { label: "Operating Mode", value: "AUTO", hint: "Satellite Guidance Active" },
  { label: "System Status", value: "ACTIVE", hint: "Continuous operation: 02h 45m" },
];

const faults = [
  {
    title: "Low Torque Warning",
    body: "Drill head encountered high resistance obstacle at Sector 4B.",
    meta: "14:22:15  -  CODE: ER564",
    danger: true,
  },
  {
    title: "GPS Signal Dropped",
    body: "Signal strength below 15%. Switched to inertial navigation.",
    meta: "13:05:40  -  CODE: SY912",
    danger: false,
  },
  {
    title: "Coolant Pressure Low",
    body: "Secondary pump pressure variance detected. Auto-adjusting flow.",
    meta: "12:12:05  -  CODE: SY119",
    danger: false,
  },
  {
    title: "Session Initialized",
    body: "Operator 'J. Smith' authenticated. All systems green.",
    meta: "11:32:10  -  CODE: INFO01",
    danger: false,
  },
];

function NavItem({ label, active = false, href }) {
  const className = `block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition duration-150 ${
    active
      ? "bg-[#2f3742] text-white font-semibold shadow-[inset_0_0_0_1px_rgba(243,244,246,0.12)]"
      : "text-[#a5b1c2] hover:bg-[#1f2937] hover:text-[#d1d5db]"
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
    >
      {label}
    </button>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#e5e7eb] text-[#1f2937]">
      <nav className="sticky top-0 z-40 border-b border-[#cbd5e1] bg-[#f8fafc]/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/agridrill-logo.png"
                alt="AgriDrill logo"
                width={32}
                height={32}
                className="rounded-md border border-[#cbd5e1] bg-white object-contain p-1 shadow-sm"
              />
              <div>
                <p className="text-sm font-bold tracking-wide text-[#334155]">AgriDrill</p>
                <p className="text-[11px] text-[#64748b]">Mission Suite</p>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-2 py-1 md:flex">
            {topNavLinks.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  index === 0
                    ? "bg-[#334155] text-white"
                    : "text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#334155]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#86efac] bg-[#f0fdf4] px-3 py-1 text-[11px] font-semibold text-[#166534] lg:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13a10 10 0 0 1 14 0" />
                <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                <path d="M12 20h.01" />
                <path d="M2 8.82a15 15 0 0 1 20 0" />
              </svg>
              Wi-Fi | Supabase Realtime
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
            </span>
            <button
              type="button"
              className="rounded-lg border border-[#7f1d1d] bg-[#b91c1c] px-3 py-2 text-xs font-extrabold tracking-wide text-white shadow-sm transition hover:bg-[#991b1b]"
            >
              E-STOP
            </button>
            <button
              type="button"
              className="relative rounded-lg border border-[#cbd5e1] bg-white p-2 text-[#64748b] shadow-sm transition hover:bg-[#e2e8f0] hover:text-[#334155]"
              aria-label="Notifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#e6252f]" />
            </button>
            <button type="button" className="rounded-full border border-[#cbd5e1] bg-white px-3 py-1.5 text-xs font-semibold text-[#334155] shadow-sm">
              JR
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto grid w-full max-w-[1500px] gap-4 p-4 lg:grid-cols-[250px_1fr]">
        <aside className="hidden rounded-2xl border border-[#1f2937] bg-[#111827] p-3 lg:flex lg:min-h-[92vh] lg:flex-col">
          <div className="mb-6 rounded-xl bg-[#0f172a] p-4">
            <div className="flex items-center gap-2">
              <Image
                src="/agridrill-logo.png"
                alt="AgriDrill logo"
                width={28}
                height={28}
                className="rounded-md border border-[#334155] bg-[#111827] object-contain p-1"
              />
              <p className="text-xl font-extrabold tracking-tight text-white">AgriDrill</p>
            </div>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-[#94a3b8]"></p>
          </div>

          <div className="space-y-1">
            {primaryNav.map((label) => {
              let href;
              if (label === "Control") href = "/control";
              else if (label === "Configuration") href = "/configuration";
              
              return <NavItem key={label} label={label} active={label === "Dashboard"} href={href} />;
            })}
          </div>

          <div className="my-5 h-px bg-[#1f2937]" />

          <div className="space-y-1">
            {secondaryNav.map((label) => (
              <NavItem key={label} label={label} />
            ))}
          </div>

          <div className="mt-auto rounded-xl border border-[#1f2937] bg-[#0f172a] p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#94a3b8]">System Link</p>
            <p className="mt-2 text-xs text-[#cbd5e1]">LAT: 45.523062</p>
            <p className="text-xs text-[#cbd5e1]">LON: -122.676482</p>
          </div>
        </aside>

        <section className="rounded-2xl border border-[#d1d5db] bg-[#f3f4f6] p-4 lg:p-6 xl:col-span-1">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-extrabold tracking-tight">Mission Control</h1>
              <span className="rounded-full border border-[#cbd5e1] bg-[#e5e7eb] px-3 py-1 text-xs font-semibold text-[#334155]">
                LIVE CONNECTED
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-xs text-[#64748b]">
                Alerts
              </button>
              <button type="button" className="rounded-full border border-[#cbd5e1] bg-[#e5e7eb] px-3 py-2 text-xs text-[#334155]">
                JR
              </button>
            </div>
          </header>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <article key={item.label} className="rounded-xl border border-[#d1d5db] bg-[#f8fafc] p-4 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#78978d]">{item.label}</p>
                <p
                  className={`mt-4 text-4xl font-bold leading-none tabular-nums ${
                    index === 2 ? "text-[#10946d]" : "text-[#123d32]"
                  }`}
                >
                  {item.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#78978d]">{item.hint}</p>
                {index === 1 ? (
                  <div className="mt-3 h-2 w-full rounded-full bg-[#d9e6f1]">
                    <div className="h-full w-[72%] rounded-full bg-[#23d7a3]" />
                  </div>
                ) : null}
                {index === 3 ? (
                  <span className="mt-3 inline-block rounded-md bg-[#dcf8ee] px-2 py-1 text-xs font-semibold text-[#108d69]">
                    ACTIVE
                  </span>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_280px]">
            <article className="rounded-xl border border-[#d1d5db] bg-[#f8fafc] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight text-[#173f34]">Energy & Performance</h2>
                <p className="text-xs text-[#78978d]">Temp: 42C   Output: 1.2kW</p>
              </div>

              <div className="grid gap-5 md:grid-cols-[170px_1fr]">
                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-[9px] border-[#1ad0a0] shadow-[inset_0_0_0_8px_#e5eff4]">
                  <div className="text-center">
                    <p className="text-5xl font-extrabold tabular-nums tracking-tight text-[#153d32]">85</p>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#78978d]">Percent</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <p className="font-medium text-[#6f8f85]">Drill Depth Consistency</p>
                      <p className="font-bold tabular-nums text-[#24e5ac]">98.2%</p>
                    </div>
                    <div className="h-2 rounded-full bg-[#d9e6f1]">
                      <div className="h-full w-[96%] rounded-full bg-[#22dcaa]" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <p className="font-medium text-[#6f8f85]">Soil Density Variance</p>
                      <p className="font-bold text-[#6f8f85]">Low</p>
                    </div>
                    <div className="h-2 rounded-full bg-[#d9e6f1]">
                      <div className="h-full w-[24%] rounded-full bg-[#20c89e]" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-[#d1d5db] bg-[#f3f4f6] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#739288]">Session Time</p>
                      <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight">02:15:44</p>
                    </div>
                    <div className="rounded-lg border border-[#d1d5db] bg-[#f3f4f6] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#739288]">RPM Active</p>
                      <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-[#20e4ab]">2,400</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button
              type="button"
              className="rounded-xl border border-[#1eb68d] bg-[#19c393] px-6 py-8 text-sm font-extrabold tracking-widest text-[#02241e] shadow-[0_0_24px_rgba(25,195,147,0.25)] transition hover:brightness-110"
            >
              START
            </button>
            <button
              type="button"
              className="rounded-xl border border-[#cbd5e1] bg-[#f8fafc] px-6 py-8 text-sm font-extrabold tracking-widest text-[#334155] transition hover:bg-[#e2e8f0]"
            >
              STOP
            </button>
            <button
              type="button"
              className="rounded-xl border border-[#cbd5e1] bg-[#f8fafc] px-6 py-8 text-sm font-extrabold tracking-widest text-[#334155] transition hover:bg-[#e2e8f0]"
            >
              RESUME
            </button>
            <button
              type="button"
              className="rounded-xl border border-[#ae2d35] bg-[#e6252f] px-6 py-8 text-sm font-extrabold tracking-widest text-white shadow-[0_0_28px_rgba(230,37,47,0.35)] transition hover:brightness-110"
            >
              E-STOP
            </button>
          </div>
        </section>


      </div>

      <footer className="border-t border-[#d1d5db] bg-[#f3f4f6]">
        <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs text-[#75958b]">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-widest text-[#1f4f42]">AGRIDRILL DASHBOARD</span>
            <span className="text-[#c5ddd6]">|</span>
            <span>Mission Control UI Layer</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#cbd5e1] bg-[#e5e7eb] px-2.5 py-1 text-[11px] font-semibold text-[#334155]">
              LINK STABLE
            </span>
            <span>Build v2.1</span>
            <span className="text-[#c5ddd6]">|</span>
            <span>Last sync: 14:31:09</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
