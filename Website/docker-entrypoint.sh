#!/bin/sh
set -eu

PORT="${PORT:-8080}"
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# DEBUG: dump the rendered config and full nginx configuration for inspection
echo "---- /etc/nginx/conf.d/default.conf ----"
cat /etc/nginx/conf.d/default.conf || true
echo "---- nginx -T (full config test) ----"
nginx -T || true

exec nginx -g 'daemon off;'
