# Etapa de construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./
RUN npm ci

# Copiamos el resto de la app
COPY . .

# Exponemos el puerto 5173 que usa Vite por defecto
EXPOSE 5173

# Comando para ejecutar Vite en modo desarrollo
CMD ["npm", "run", "dev"]
