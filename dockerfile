# Base image
FROM node:23-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY --chown=app:app . /app

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
