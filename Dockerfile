FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.23.3-alpine 
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist/ /var/www/ui-kiosk/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]