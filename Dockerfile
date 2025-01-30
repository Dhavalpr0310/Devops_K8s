
FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve


EXPOSE 5000

CMD ["serve", "-s", ".", "-l", "5000"]
