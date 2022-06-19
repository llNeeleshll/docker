## To be used in production, we're creating two images here:
## 1. First is to run npm build and once it runs it'll create some static files.
## 2. Second is nginx server, here we'll copy the static files created in the above step.

FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install

## Volume only required in development and not on production
COPY ./ ./

## Build the react project and create the static files.
RUN npm run build


## Creating an another container to simply hosting the files.
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html