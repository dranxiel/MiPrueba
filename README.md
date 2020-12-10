# MiPrueba
El Proyecto consta de dos partes
Requisitos previos Java 8 y su sdk , Npm 

1.- Backend (api-back). Se subió con todas las dependencias para evitar detalles de instalación bajar y abrir con intelli j o importar con eclipse. O el ide preferencia. 
En caso de error de dependencias borrar .idea y .settings.
Se recomienda intelli J. en caso de error usar el comando clean install con Maven. 
Se uso base de datos h2 con Hibernate H2 . Por motivos de tiempo. 
Pruebas abarcaron solo a los controller. Faltan pruebas de los servicios. por motivos de tiempos se realizo solo de la primera parte. 

2.- front. (tareaFront). Realizar un npm isntall en la carpeta del proyecto y levantar con npm start. La api debe estar arriba. 

#Instrucciones de instalación 
Para el back realiza maven build jar . creara el jar para realizar el despliegue en el servidor o Docker correspondiente, bajo su respectiva configuración 
Para el fron realizar un npm build . creara build el cual podra ser depleago en un servidor web. De rutas dynamicas. Si no configurar las rutas. 
