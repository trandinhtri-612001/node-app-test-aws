FROM node:slim
WORKDIR /usr/share/app
COPY . .
RUN npm i
EXPOSE 4000
CMD [ "npm","start" ]