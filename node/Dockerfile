FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

COPY . .
RUN npm install --quiet --no-progress yarn

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

ENTRYPOINT [ "dockerize", "-wait", "tcp://db:3306", "-timeout", "120s", "docker-entrypoint.sh" ]
CMD [ "node", "index.js" ]