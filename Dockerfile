# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app

# Explicitly copy both package.json and package-lock.json first
COPY package*.json ./

# Run clean install (this will now find the lockfile perfectly)
RUN npm ci

# Copy the rest of your application code
COPY . .
RUN node scripts/gen-spa-routes.mjs && npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine

# Remove default Nginx config files
RUN rm -rf /etc/nginx/conf.d/*

# SPA route map (true 404 for unknown paths) + site config
COPY --from=builder /app/nginx/spa-routes.map /etc/nginx/spa-routes.map
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]