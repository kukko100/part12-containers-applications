FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install


# can't figure out how to run ts+vite in production through docker. Running in dev .
CMD ["npm", "run", "dev", "--", "--host"]