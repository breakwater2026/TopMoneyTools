# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve assets using a native Node static server
FROM node:20-alpine
WORKDIR /app

# Install the official Vercel static server globally
RUN npm install -g serve

# Copy the compiled static assets from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 8080

# Run 'serve' in single-page app mode (-s) listening on port 8080 (-l 8080)
CMD ["serve", "-s", "dist", "-l", "8080"]
