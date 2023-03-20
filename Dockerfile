FROM node:18-alpine as builder

WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.23.3-alpine 
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /var/www/ui-kiosk/html/