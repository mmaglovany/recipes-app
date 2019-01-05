FROM node:10

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN yarn install --production

# Bundle app source
COPY . /app

EXPOSE 8080
CMD [ "yarn", "serve" ]
