FROM node:20

WORKDIR /usr/src/app

COPY --chow=node:node . .
RUN npm ci

ENV DEBUG=playground:*

USER node
CMD npm start
