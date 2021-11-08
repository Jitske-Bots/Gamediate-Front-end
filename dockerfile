FROM node:14.17.6-alpine as build-step
RUN apk update && apk add bash
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
RUN chmod +X /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
