# Step 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Run the build using npx to locate the local vite installation
RUN npx vite build

# Step 2: Serve the production files with Nginx
FROM nginx:alpine

# Clean default nginx files
RUN rm -rf /etc/nginx/conf.d/*

# Copy your custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the compiled production assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]