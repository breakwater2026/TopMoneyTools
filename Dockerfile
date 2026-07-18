cat << 'EOF' > Dockerfile
# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app

# Explicitly copy package configuration first
COPY package*.json ./

# Changed from npm ci to npm install since package-lock.json is missing
RUN npm install

# Copy the rest of your application code
COPY . .
RUN npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine

# Remove default Nginx config files
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom static Nginx config directly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
EOF
