FROM node:18-alpine

WORKDIR /app

COPY . .

CMD [ "node", "build/node.js" ]

EXPOSE 3001
