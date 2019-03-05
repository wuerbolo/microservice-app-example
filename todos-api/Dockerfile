FROM node:8-alpine

EXPOSE 8082

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install elastic-apm-node --save

COPY . .

CMD ["sh", "-c", "npm start" ]
