# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# THIS LINE WAS MISSING OR MISPLACED:
RUN npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
