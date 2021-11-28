FROM node
RUN apt-get update

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm

COPY . /app

EXPOSE 3000
CMD ["node", "server/index.js"]