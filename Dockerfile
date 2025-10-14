FROM node:22.13.1
WORKDIR /app

COPY package.json .
COPY prisma prisma
RUN yarn install --ignore-engines --legacy-peer-deps
RUN yarn prisma generate

COPY . .
RUN yarn build

EXPOSE ${PORT}

ENTRYPOINT ["sh", "-c", "yarn migrate:dev && yarn dev"]

