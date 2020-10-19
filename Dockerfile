From ubuntu

RUN apt-get update

RUN apt-get install nodejs -y

RUN apt-get install npm -y

RUN apt-get install git -y

RUN git clone https://github.com/samirkumaralur/React_Redux.git

WORKDIR /React_Redux

RUN npm install

ENTRYPOINT npm start
