"use strict";


////////////////////////////////////////////////////////////////////
//////////////////////////Require express///////////////////////////
////////////////////////////////////////////////////////////////////

var express = require('express');
var app = express();



////////////////////////////////////////////////////////////////////
////////////////////////Require node_modules////////////////////////
////////////////////////////////////////////////////////////////////
var http = require('http');
const winston = require('winston');         //winston log levels --> { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
//var routes = require('./src/routes');
//var path = require('path');
//var bodyParser = require('body-parser');
//var mysql = require('mysql');



////////////////////////////////////////////////////////////////////
//////////////////////Require internal modules//////////////////////
////////////////////////////////////////////////////////////////////
var utilities = require('./src/lib/utilities.js');
var connection = require("./src/config/config.js");
var app = require("./src/config/configExpress.js");
require('./src/routes/routes')(app);



////////////////////////////////////////////////////////////////////
//////////////////////Load Variable Environment/////////////////////
////////////////////////////////////////////////////////////////////
var ConfigEntorno = require('./src/config/environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();

console.log( ConfigEntornoAmbiente.PORT );
console.log( ConfigEntornoAmbiente.SERVERURL );
console.log( ConfigEntornoAmbiente.LOG.LEVEL );





////////////////////////////////////////////////////////////////////
////////////////////////Load Configuration LOG//////////////////////
////////////////////////////////////////////////////////////////////
var configurationLog = require('./src/config/configurationLog.js');
var instanceConfigurationLog = new configurationLog( );
console.log( instanceConfigurationLog.setLogLevel( ConfigEntornoAmbiente.LOG.LEVEL )  );
winston.level = instanceConfigurationLog.getLogLevel( ConfigEntornoAmbiente.LOG.LEVEL ); //Setea LOG LEVEL // 'debug', 'info' //winston.level = 'debug'; //winston.level = 'info';
winston.info('Test log in INFO');
winston.debug('Test log in DEBUG');




//app.configure(function() {
  //app.set('connection', connection);
  //app.set('app', app);
//});



////////////////////////////////////////////////////////////////////
//////////////////////////Create Server HTTP////////////////////////
////////////////////////////////////////////////////////////////////
console.log( ConfigEntornoAmbiente.AMBIENTE );
if( ConfigEntornoAmbiente.AMBIENTE == "desarrollo" ){
	console.log("Esta seteado ambiente de desarrollo.");
	http.createServer(app).listen( ConfigEntornoAmbiente.PORT , function(){
		console.log('Express Server Listening ON Port ' + ConfigEntornoAmbiente.PORT );
	});

}else{
	console.log("Esta seteado ambiente de produccion");

	http.createServer(app).listen( process.env.PORT , function(){ 
		console.log('Express Server Listening ON Port ' + process.env.PORT );
	});

}






