# AgriDrill Roadmap Status

This file tracks implementation based on your approved roadmap phases.

## Phase 1: Setup, Architecture, Schema (Weeks 1-2)

- [x] Next.js 14 App Router scaffold (JavaScript variant)
- [x] Supabase packages and environment template
- [x] Starter schema for sessions, telemetry_events, planting_logs, configurations, fault_logs
- [x] API route contract scaffold (`/api/telemetry`, `/api/command`, `/api/status`)
- [ ] Supabase Realtime channel live verification
- [ ] Figma wireframes and team sign-off
- [ ] Final API contract sign-off with ESP32 side

## Phase 2: UI Library and Pages (Weeks 3-5)

- [x] Reusable components scaffolded:
  StatusBadge, MetricCard, BatteryGauge, FaultAlert, NavBar, Sidebar
- [x] Pages scaffolded:
  Dashboard, Configuration, Session History, Manual Control, Logs
- [ ] shadcn/ui setup
- [ ] React Hook Form + Zod validation wiring
- [ ] TanStack Table integration for history table

## Phase 3: API and Realtime (Weeks 6-8)

- [x] API route skeletons created
- [ ] Telemetry insert tested end-to-end with Supabase
- [ ] Command forwarding tested with ESP32 ACK
- [ ] Dashboard Supabase Realtime subscription
- [ ] Fault toast notifications
- [ ] 5-second watchdog auto-stop
- [ ] Configuration persistence and load
- [ ] Session detail analytics charts

## Phase 4: Testing and Optimization (Weeks 9-11)

- [ ] E-Stop latency tests
- [ ] Cross-browser and responsive QA
- [ ] 4-hour soak test
- [ ] Strict typing policy replacement for JS lint policy
- [ ] Full integration test with robot firmware
- [ ] Lighthouse and query optimization

## Phase 5: Thesis and Documentation (Weeks 12-14)

- [ ] Abstract
- [ ] Acknowledgments
- [ ] Section 1.4.6
- [ ] Figure 2.5.1 flow description
- [ ] Developer README hardening
- [ ] Final cleanup and release tag
