FROM node:18-alpine as builder
COPY . . 
# RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN yarn install
RUN yarn build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder package.json yarn.lock /app/
RUN yarn install --production=true
COPY --from=builder dist/src/ /app/dist/
ENTRYPOINT [ "yarn", "preview" ]