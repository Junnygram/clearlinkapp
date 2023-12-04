FROM node:18-alpine

RUN apk add --no-cache git openssh

RUN mkdir /app

ARG PORT

ENV PORT $PORT

WORKDIR /app

COPY yarn*.lock ./

COPY package*.json ./

RUN yarn

COPY tsconfig.json ./

COPY . ./

RUN yarn install

EXPOSE $PORT

CMD ["yarn", "start"]