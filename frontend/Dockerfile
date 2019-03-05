FROM node:8-alpine

EXPOSE 8080

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install elastic-apm-js-base --save

COPY . .

CMD ["sh", "-c", "npm start" ]
