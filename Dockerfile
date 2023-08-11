FROM node:18-alpine

WORKDIR /application

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]