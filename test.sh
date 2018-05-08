echo "[test.sh] ****** Iniciando ejecucion con mocha utst.sh *****"
cd src/test/utst
npm install
mocha utst.js
echo "[test.sh] ***** Saliendo de ejecucion de mocha utst.sh *****"
