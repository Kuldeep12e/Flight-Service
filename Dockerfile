FROM node

WORKDIR /developer

RUN apt-get update && apt-get install -y git 

RUN git clone https://github.com/Kuldeep12e/Flight-Service.git

WORKDIR /developer/Flight-Service

RUN npm ci

ENV PORT=3000

EXPOSE 3000

CMD ["npm" , "run" , "dev"]


