FROM node:10 AS client

COPY client/ ./client/
RUN cd client && yarn install && yarn run build

FROM node:10 AS server

COPY --from=client /client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && yarn install
COPY server/app.js ./server/

EXPOSE 8081

CMD ["node", "./server/app.js"]