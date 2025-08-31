# ForeverDocs (Vercel + Render)

- **frontend/** → Vercel (Vite + React + Tailwind). Google Forms embedded; no custom API.
- **backend/** → Render (Express). Health endpoints only.

## Quickstart
```bash
npm i
npm run dev           # runs Vite dev server
npm run dev:backend   # runs Express locally on :3000
```

## Deploy
### Frontend (Vercel)
- Set project root to `frontend/`.
- No build config needed; Vercel auto-detects Vite.
- SPA rewrite provided in `frontend/vercel.json`.

### Backend (Render)
- New **Web Service** from `backend/`.
- Runtime: Node 18+, Start command: `npm start`.
