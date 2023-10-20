FROM cypress/base:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/results" ]

RUN npm install

CMD ["npm","run","test"]

