# Web Server Custom
Este servidor permite a tu pagina web estatica desplegarse en un servidor local, dependiendo de ciertas configuraciones.

## ¿Còmo usarlo?
Para esto vamos a tener en cuenta los siguientes pasos:
1. Clonamos el repositorio con:
	```
	git clone https://github.com/jeirf12/serverWebNodejs.git
	```
2. Creamos la carpeta publica dentro del repositorio donde vamos a copiar el proyecto, recomendado `public`.
3. Configurar el archivo `.env` con los siguientes parametros:
	```
	PORT=${Puerto-del-servidor-debe-ser-solo-numerico}
	PUBLIC_PATH=${el-nombre-carpeta-que-crees-dentro-del-proyecto}
	```
4. Copiamos el proyecto en la carpeta publica anteriormente creada.
5. Ejecutamos el proyecto con el siguiente comando:
	```
	npm start
	```
