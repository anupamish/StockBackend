FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./
ENV PORT 8080 
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]

