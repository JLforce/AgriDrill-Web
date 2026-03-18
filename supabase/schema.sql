-- AgriDrill starter schema (JavaScript app integration)
create extension if not exists "pgcrypto";

create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  operator_name text,
  mode text not null default 'AUTO',
  notes text,
  created_at timestamptz not null default now()
);

alter table public.sessions
  add column if not exists configuration_snapshot jsonb;

create table if not exists public.telemetry_events (
  id bigint generated always as identity primary key,
  session_id uuid not null references public.sessions(id) on delete cascade,
  holes_drilled integer not null default 0,
  battery_percent numeric(5,2) not null,
  mode text not null,
  status text not null,
  xte numeric(8,3),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.planting_logs (
  id bigint generated always as identity primary key,
  session_id uuid not null references public.sessions(id) on delete cascade,
  hole_index integer not null,
  planned_spacing_cm numeric(6,2),
  actual_spacing_cm numeric(6,2),
  planned_depth_cm numeric(6,2),
  actual_depth_cm numeric(6,2),
  created_at timestamptz not null default now()
);

create table if not exists public.configurations (
  id uuid primary key default gen_random_uuid(),
  crop_profile text not null,
  bed_length_cm numeric(8,2) not null,
  bed_width_cm numeric(8,2) not null,
  hole_spacing_cm numeric(6,2) not null,
  drilling_depth_cm numeric(6,2) not null,
  is_last_used boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.configurations
  add column if not exists number_of_rows integer,
  add column if not exists row_spacing_cm numeric(6,2),
  add column if not exists session_notes text;

create table if not exists public.fault_logs (
  id bigint generated always as identity primary key,
  session_id uuid references public.sessions(id) on delete set null,
  fault_code text,
  fault_name text not null,
  severity text not null default 'WARN',
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists telemetry_events_session_id_idx on public.telemetry_events(session_id);
create index if not exists telemetry_events_created_at_idx on public.telemetry_events(created_at desc);
create index if not exists planting_logs_session_id_idx on public.planting_logs(session_id);
create index if not exists fault_logs_session_id_idx on public.fault_logs(session_id);
create index if not exists fault_logs_created_at_idx on public.fault_logs(created_at desc);

alter table public.sessions enable row level security;
alter table public.telemetry_events enable row level security;
alter table public.planting_logs enable row level security;
alter table public.configurations enable row level security;
alter table public.fault_logs enable row level security;

-- Starter permissive policies for development only.
-- Replace these with role-aware policies before production multi-user deployment.
drop policy if exists "dev_allow_all_sessions" on public.sessions;
create policy "dev_allow_all_sessions" on public.sessions for all using (true) with check (true);

drop policy if exists "dev_allow_all_telemetry" on public.telemetry_events;
create policy "dev_allow_all_telemetry" on public.telemetry_events for all using (true) with check (true);

drop policy if exists "dev_allow_all_planting_logs" on public.planting_logs;
create policy "dev_allow_all_planting_logs" on public.planting_logs for all using (true) with check (true);

drop policy if exists "dev_allow_all_configurations" on public.configurations;
create policy "dev_allow_all_configurations" on public.configurations for all using (true) with check (true);

drop policy if exists "dev_allow_all_fault_logs" on public.fault_logs;
create policy "dev_allow_all_fault_logs" on public.fault_logs for all using (true) with check (true);

-- Realtime guidance:
-- 1) In Supabase dashboard, enable replication for telemetry_events and fault_logs.
-- 2) Subscribe from client components to INSERT events.
