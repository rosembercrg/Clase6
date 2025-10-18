# Etapa de construcción
FROM node:latest AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json (o yarn.lock si usas Yarn)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build --prod

# Etapa de ejecución
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/ /usr/share/nginx/html

# Exponer el puerto 80 para que sea accesible en el navegador
EXPOSE 80

# Ejecutar nginx para servir la aplicación
CMD ["nginx", "-g", "daemon off;"]