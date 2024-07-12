FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

EXPOSE 3000

CMD npm run dev