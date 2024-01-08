FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

COPY public ./public

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]