var express = require("express"); 
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');

//creamos un objeto para ir almacenando todo lo que necesitemos
var categoriaModel = {};

//get All Subcategoria
categoriaModel.getAllCategoria = function( callback ){
		
    console.log("Iniciando en metodo getAllCategoria ");
    if (connection){
        connection.query(' SELECT * FROM categoria WHERE id_categoria != 0 ORDER BY id_categoria ASC  ', function(error, rows){

           if(error){
               throw error;
           }else{
               callback(null, rows);
           }
        });
    }

//    connection.end();
   
setInterval(function () {
    connection.query('SELECT 1');
}, 5000);
 
    console.log("Saliendo de metodo getAllCategoria ");
		
}

module.exports = categoriaModel;
