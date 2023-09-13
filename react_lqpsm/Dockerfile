# Etapa 1: Construir la aplicación
FROM node:lts-bullseye as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Etapa 2: Ejecutar la aplicación
FROM node:lts-bullseye as deploy
WORKDIR /app
COPY --from=build /app .  
CMD ["yarn", "start"]

