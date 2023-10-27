FROM cypress/base:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/results" ]

RUN npm install

RUN npm install cypress --save-dev

CMD ["npm","run","test"]

