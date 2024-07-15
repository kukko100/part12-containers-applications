FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

EXPOSE 3000
EXPOSE 80

CMD npm start