FROM hank9653/bdd

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY package.json package.json
COPY features features

# Install app dependencies
RUN npm install

RUN apt-get clean

CMD [ "npm", "test" ]