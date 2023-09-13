# Use una imagen base de Python (asegúrate de que coincida con la versión de Python de tu proyecto)
FROM python:3.10

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación en el contenedor
COPY . /app

# Instala las dependencias de tu proyecto (asegúrate de tener un archivo requirements.txt)
RUN pip3 install -r requirements.txt 

# Define el puerto en el que tu aplicación Django va a escuchar
EXPOSE 8000

# Ejecuta el comando para iniciar tu aplicación Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
