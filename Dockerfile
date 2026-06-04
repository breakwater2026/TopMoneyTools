# Multi-stage build for optimized production image
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Clean build: ONLY copy the public folder contents directly to the web server root
COPY public/ /usr/share/nginx/html/

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Tell Cloud Run to use port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]