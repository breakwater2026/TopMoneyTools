# Stage 1: Build the Vite application from the Website folder
FROM node:20-alpine AS builder
WORKDIR /app
COPY Website/package*.json ./
RUN npm ci
COPY Website .
RUN npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY Website/nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY Website/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
EXPOSE 8080
CMD ["/docker-entrypoint.sh"]
