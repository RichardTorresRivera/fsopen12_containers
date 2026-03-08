FROM node:20.9.0-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=express:*

USER node

CMD ["dumb-init", "npm", "start"]