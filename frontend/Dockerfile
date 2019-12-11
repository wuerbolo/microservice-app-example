FROM node:8-alpine

EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install elastic-apm-js-base --save
RUN npm install --save @elastic/apm-rum-vue

COPY . .

CMD ["sh", "-c", "npm start" ]
