FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

EXPOSE 80

EXPOSE 3000

CMD npm run start