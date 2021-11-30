FROM node:14.17.0
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]