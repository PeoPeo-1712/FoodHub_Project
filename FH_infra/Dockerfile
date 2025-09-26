# ---------- Build frontend ----------
FROM node:20-bullseye-slim AS build-frontend
WORKDIR /frontend
COPY ../FH_FrontEnd/package*.json ./
RUN npm install --legacy-peer-deps
COPY ../FH_FrontEnd .
RUN npm run build

# ---------- Build backend ----------
FROM node:20-bullseye-slim AS backend
WORKDIR /app
COPY ../FH_BackEnd/package*.json ./
RUN npm install --legacy-peer-deps
COPY ../FH_BackEnd .

# copy FE build vào backend/public
COPY --from=build-frontend /frontend/dist ./public

EXPOSE 3000
CMD ["node", "index.js"]
