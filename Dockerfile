FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "/app/server/index.js"]