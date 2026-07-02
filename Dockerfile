# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine

# Clear out any default Nginx boilerplate files
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# Copy the compiled React assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your local custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
