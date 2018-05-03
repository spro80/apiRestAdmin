echo "[test.sh] Iniciando ejecucion con mocha utst.sh"
cd src/test/utst
npm install
mocha utst.js
echo "Saliendo de ejecucion de mocha utst.sh"
