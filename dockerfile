FROM node:23-alpine3.20 AS base
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install --production
EXPOSE 3000
CMD ["npm", "run", "dev"]
