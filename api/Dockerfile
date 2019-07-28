FROM node:12-alpine
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD [ "node", "index.js" ]