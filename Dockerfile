FROM node:7
WORKDIR /app
RUN npm install
COPY . /app
CMD node use2.2.js
EXPOSE 8081
