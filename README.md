# Doctogram Frontend (Enterprise starter)

## What is included
- React + TypeScript (Vite)
- MUI (Material UI)
- React Query (TanStack Query)
- Axios with interceptors
- Zustand (lightweight state)
- React Hook Form + Zod
- Dockerfile + docker-compose.yml for frontend service
- Example pages: Dashboard, Patients
- Basic auth hook + protected route example

## Run locally
1. `npm install`
2. copy `.env.example` -> `.env` and set `VITE_API_BASE_URL`
3. `npm run dev`

## Docker build & run (production)
1. `docker build -t doctogram-frontend .`
2. `docker run -p 80:80 doctogram-frontend`