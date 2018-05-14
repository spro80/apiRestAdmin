


##############################################################################################################
#INSTALAR MOCHA EN UBUNTU:
#Descripcion: Para instalar mocha en Ubuntu, se debe ejecutar el siguiente comando en la consola de Linux (Ubuntu)
sudo apt-get install mocha




##############################################################################################################
#EJECUTAR COMANDOS DE NODE PARA AGREGARLOS AL PACKAGE.JSON, EN LA RAIZ DEL DIRECTORIO
#DESCRIPCION: Al ejecutar estos comandos con --save-dev, se guardan diretamente en el archivo package.json, en la raiz donde fue ejecutado el comando.

npm install mocha --save-dev
npm install chai --save-dev

npm install supertest --save-dev
npm install node-fetch --save-dev




##############################################################################################################
#EJECUTAR TEST API REST:  USUARIO
#DESCRIPCION:             Para ejecutar las pruebas del API REST USUARIO, se debe ejecutar el siguiente comando:


ddiaz@ddiaz-Inspiron-5567:/var/www/html/apiRestAdmin/src/test/testApiRest$ npm test

o

ddiaz@ddiaz-Inspiron-5567:/var/www/html/apiRestAdmin/src/test/testApiRest$ mocha test.js
