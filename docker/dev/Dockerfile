FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./codegen.yaml ./

RUN yarn

COPY ./ ./

RUN yarn codegen

COPY ./ ./

EXPOSE 3000

CMD ["yarn", "dev", "--host"]