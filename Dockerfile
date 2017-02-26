FROM node:7.5-alpine

VOLUME /usr/src/app
WORKDIR /usr/src/app

EXPOSE 3000

CMD ["-"]
ENTRYPOINT ["npm"]