FROM cypress/base:latest

WORKDIR home/cypress/

COPY . home/cypress/

VOLUME [ "/home/cypress/results" ]

CMD ["npm","run","test"]