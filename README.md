# ASTRAL

A clean, fast browser shell inspired by the navigation and layout patterns of Interstellar, with **Scramjet** planned as the browsing engine.

## Current status

ASTRAL 0.1.0 is the clean foundation:
- Lightweight Express server
- Responsive browser-style home screen
- Health endpoint at `/health`
- No open-proxy endpoint is enabled in this starter

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Planned architecture

- **Interface:** original ASTRAL UI, inspired by Interstellar's clean navigation patterns
- **Engine:** Scramjet, integrated as a separately maintained dependency
- **Server:** explicit host allowlist, request limits, and safe deployment defaults
- **Performance:** regional hosting, compression for eligible assets, careful caching, and minimal frontend JavaScript

## Scramjet licensing

Scramjet is licensed under **GNU AGPL-3.0-only**. Before integrating, distributing, or operating a modified version, review the license and preserve the required notices and corresponding-source obligations. ASTRAL's own code and assets should remain clearly separated from Scramjet's code.

## Safety and deployment

Do not deploy this as an unrestricted public proxy. Keep browsing limited to sites you own or are authorized to test, and use an explicit host allowlist before enabling engine routes. Do not use it to evade school, workplace, or network access controls.

## Credits

- Scramjet: https://github.com/MercuryWorkshop/scramjet
- Interface inspiration: https://github.com/haruakinahimsigma/Interstellar

ASTRAL is a new implementation; it does not copy Interstellar's source files.
