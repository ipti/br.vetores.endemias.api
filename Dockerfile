FROM node:12.18.3

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm i -g @adonisjs/cli

COPY . .

EXPOSE 3333

CMD ["adonis", "serve", "--dev"]