"use strict";

//Get Parameters Of Configuration BD
//var ConfigBD = require("./configBD.js");
//var BD = new ConfigBD("develop"); 
//var configBD = BD.getConfigBD();

//Require
var mysql = require('mysql');

//Read environment variables.
var ConfigEntorno = require('./environmentConfig.js');
let ConfigEntornoAmbiente = ConfigEntorno.EnvironmentConfig();


console.log("////////////////////////////////////////////////***");
console.log( "ConfigEntornoAmbiente.BD_HOST: " + ConfigEntornoAmbiente.DATABASE.BD_HOST );
console.log( "ConfigEntornoAmbiente.BD_USER: " + ConfigEntornoAmbiente.DATABASE.BD_USER );
console.log( "ConfigEntornoAmbiente.BD_PASS: " + ConfigEntornoAmbiente.DATABASE.BD_PASS );
console.log( "ConfigEntornoAmbiente.BD_DATABASE: " + ConfigEntornoAmbiente.DATABASE.BD_DATABASE );
console.log("////////////////////////////////////////////////***");


var connection = mysql.createConnection({
        
    host     : ConfigEntornoAmbiente.DATABASE.BD_HOST, //"localhost",//configBD.host,
    user     : ConfigEntornoAmbiente.DATABASE.BD_USER, //"spro80",//configBD.user,
    password : ConfigEntornoAmbiente.DATABASE.BD_PASS,//"808080",//configBD.password,
    database : ConfigEntornoAmbiente.DATABASE.BD_DATABASE//"carritoresponsive"//configBD.database
});



connection.connect( function(err){
    
    console.log("CONECTANDO CON BASE DE DATOS!!!");
    if(!err) {
        console.log("[config.js] Database is connected ... !!");    
    }else {
        console.log("[config.js] Error connecting database ... !!");
	console.log( err );	
	connection.end();
    }
    
});



setInterval(function () {
    console.log("**********************Keep Alive cada 5 segundo************************");
    connection.query('SELECT 1');
}, 5000);



module.exports = connection;
