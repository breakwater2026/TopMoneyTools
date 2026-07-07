<<<<<<< HEAD
# Stage 1: Build the Vite application from the Website folder
FROM node:20-alpine AS builder
WORKDIR /app
COPY Website/package*.json ./
RUN npm ci
COPY Website .
=======
# Stage 1: Build the Vite application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
>>>>>>> parent of ceb17cf (Move website source into Website/ and document new repo layout)
RUN npm run build

# Stage 2: Serve assets using Nginx
FROM nginx:alpine
<<<<<<< HEAD
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY Website/nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY Website/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
EXPOSE 8080
=======

# Clear out any default Nginx boilerplate files
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# Copy the compiled React assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your local custom Nginx configuration file template and entrypoint
COPY nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080

>>>>>>> parent of ceb17cf (Move website source into Website/ and document new repo layout)
CMD ["/docker-entrypoint.sh"]
