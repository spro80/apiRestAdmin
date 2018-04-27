var express = require("express");
var app = express();
var mysql = require('mysql');
var connection = require('../config/config.js');


//creamos un objeto para ir almacenando todo lo que necesitemos
var usuarioModel = {};


//get All Usuario
usuarioModel.getAllUsuario = function( callback ){
	
	if (connection){

		connection.query(' SELECT * FROM usuario WHERE id_usuario != 0 ORDER BY id_usuario ASC  ', function(error, rows){
		
			if(error){
				throw error;
			
			}else{
				callback(null, rows);
			
			}
		});
	}
	
}



//get usuario by Id
usuarioModel.getUsuarioById = function( id, callback ){
   
    console.log(" Iniciando en metodo getUsuarioById. ");

    if (connection){

        connection.query(' SELECT * FROM usuario WHERE id_usuario = ? ORDER BY id_usuario ASC  ', [id] , function(error, rows){
	//connection.query(' SELECT * FROM usuario WHERE id_usuario != 0 ORDER BY id_usuario ASC  ', function(error, rows){

	    if(error){
	        throw error;

	    }else{
	        callback(null, rows);

	    }

	});
    }

}



usuarioModel.deleteUsuario = function( id, callback ){
	        
        if (connection){

            connection.query(' DELETE FROM usuario WHERE id_usuario = ?  ', [id] , function(error, rows){

                if(error){
                          throw error;

                }else{
                      callback(null, rows);

                }

            });
        }
}



//update usuario
usuarioModel.editUsuario = function( id, request, callback ){
	        
	        var id = request.params.id;
	        var input = JSON.parse(JSON.stringify( request.body ));

	        var data = {
		    id_tipo_cliente : input.id_tipo_cliente,
		    password_usuario : input.password_usuario,
		    nombre_usuario : input.nombre_usuario,
                    apellido_paterno_usuario : input.apellido_paterno_usuario,		    
                    apellido_materno_usuario : input.apellido_materno_usuario,
	            ciudad_usuario : input.ciudad_usuario,
                    comuna_usuario : input.comuna_usuario,
                    direccion_usuario : input.direccion_usuario,
                    nro_direccion : input.nro_direccion,
                    celular_usuario : input.celular_usuario,
                    email_usuario : input.email_usuario,
                    whatsap_usuario : input.whatsap_usuario,
                    tipo_admin_usuario: input.tipo_admin_usuario,
                    vigencia_usuario : input.vigencia_usuario
		};


		if (connection){

	            connection.query(' UPDATE usuario set ? WHERE id_usuario = ?  ', [data , id] , function(error, rows){

			    if(error){
 			        throw error;
			    }else{																						                                callback(null, rows);
																												}				                        
		    });																								        }																																		        
}





/*
//get rows by id Subcategoria
subcategoriaModel.editFormSubcategoria = function( id, callback ){
	
	if (connection){
		connection.query(' SELECT * FROM subcategoria WHERE id_subcategoria = ?  ', [id] , function(error, rows){
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
		});
	}
	
}



//update Subcategoria
subcategoriaModel.editSubcategoria = function( id, request, callback ){
	
	var id = request.params.id;
	var input = JSON.parse(JSON.stringify( request.body ));

	var data = {
		id_categoria          : input.categoria,
		des_subcategoria      : input.descripcion,
		vigencia_subcategoria : input.vigencia 
	};

	if (connection){
		
		connection.query(' UPDATE subcategoria set ? WHERE id_subcategoria = ?  ', [data , id] , function(error, rows){
		
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
			
		});
	}
	
}
*/

//insert usuario
usuarioModel.insertUsuario = function( id, request, callback ){
	
	var id = request.params.id;
	var input = JSON.parse(JSON.stringify( request.body ));
	//var vigencia = 1;
	var data = {
		id_usuario          : input.id_usuario,
		id_tipo_cliente     : input.id_tipo_cliente,
		rut_completo_usuario: input.rut_completo_usuario,
		password_usuario    : input.password_usuario,
		digito_rut_usuario  : input.digito_rut_usuario,
		nombre_usuario      : input.nombre_usuario,
                apellido_paterno_usuario : input.apellido_paterno_usuario,
		apellido_materno_usuario : input.apellido_materno_usuario,
		ciudad_usuario : input.ciudad_usuario,
		comuna_usuario : input.comuna_usuario,
		direccion_usuario : input.direccion_usuario,
		nro_direccion : input.nro_direccion,
		celular_usuario: input.celular_usuario,
		email_usuario: input.email_usuario,
		whatsap_usuario: input.whatsap_usuario,
		tipo_admin_usuario : input.tipo_admin_usuario,
		vigencia_usuario : input.vigencia_usuario		
	};
	
	if (connection){
		
		var queryInsert = " INSERT INTO usuario VALUES ";
		queryInsert     = queryInsert + "(   '"+data.id_usuario+"' , '"+data.id_tipo_cliente+"' , '"+data.rut_completo_usuario+"' , '"+data.password_usuario+"' , '"+data.digito_rut_usuario+"' , '"+data.nombre_usuario+"' , '"+data.apellido_paterno_usuario+"' , '"+data.apellido_materno_usuario+"' , '"+data.ciudad_usuario+"' , '"+data.comuna_usuario+"' , '"+data.direccion_usuario+"' , '"+data.nro_direccion+"' , '"+data.celular_usuario+"' , '"+data.email_usuario+"' , '"+data.whatsap_usuario+"' , '"+data.tipo_admin_usuario+"' , '"+data.vigencia_usuario+"' ) ";

		console.log( queryInsert );
		
		connection.query( queryInsert , [data , id] , function(error, rows){
		
			if(error){
				throw error;
			}else{
				callback(null, rows);
			}
			
		});
	}
	
}



module.exports = usuarioModel;
