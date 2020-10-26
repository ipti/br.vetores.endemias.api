FROM node:12.18.3

WORKDIR /usr/app

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN npm install

COPY . .

EXPOSE 3333

CMD ["adonis", "serve"]