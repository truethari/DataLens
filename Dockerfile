FROM node:22-alpine

WORKDIR /app
COPY . .

RUN npm install

ARG NODE_ENV=production
ARG PORT=3000

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
