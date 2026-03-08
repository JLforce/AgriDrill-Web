# AgriDrill API Contract v0.1 (Draft)

This contract defines the handshake between Web HMI and ESP32 integration endpoints.

## 1) `POST /api/telemetry`

Purpose: receive telemetry payload from ESP32 relay and insert into Supabase.

Request body:

```json
{
  "session_id": "uuid",
  "holes_drilled": 0,
  "battery_percent": 0,
  "mode": "AUTO",
  "status": "RUNNING",
  "xte": 0.0,
  "payload": {}
}
```

Response success:

```json
{ "ok": true }
```

## 2) `POST /api/command`

Purpose: receive dashboard control command and forward to ESP32 command endpoint.

Request body:

```json
{
  "command": "STOP",
  "payload": {}
}
```

Response:

```json
{
  "ok": true,
  "status": 200,
  "ack": "..."
}
```

## 3) `GET /api/status`

Purpose: check service health and environment configuration.

Response:

```json
{
  "ok": true,
  "service": "agridrill-web",
  "timestamp": "ISO-8601",
  "checks": {
    "supabaseUrlConfigured": true,
    "supabaseAnonConfigured": true,
    "serviceRoleConfigured": true,
    "esp32BaseUrlConfigured": true
  }
}
```
