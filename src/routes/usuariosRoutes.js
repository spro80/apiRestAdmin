//var UTILITIES = require("../lib/utilities/utilities.js");

const usuarioModel = require("../models/usuarioModels.js");


module.exports = function ( app ){



	//POSTMAN
	//Metodo: GET
	//URL:    localhost:3001/usuario
	//Status:  OK
	 app.get("/usuario", function(request,response){
		 
		 usuarioModel.getAllUsuario( function(error, data){
			if(error){
				console.log("Error al invocar a getAllUsuario.");
			}else{
				if( data.length > 0 ){
					//response.render('usuarios/usuarios' , { message:"Se han encontrado Usuarios en BD." , data:data } );-
					response.status(200).json({
						'result' : 0,
						'data_usuario' : data,
						'description' : 'Se han encontrado  usuarios en la respuesta desde BD.'
					 });

				}else{
					//response.render('usuarios/usuarios' , { message:"No se han encontrado Usuarios." } );
					response.status(200).json({
						'result' : 1,
						'description' : 'No se han retornado usuarios en la respuesta desde BD'
					});
				}
			}
		 });
		 
	 });
 


        //POSTMAN
	//Metodo:  GET
	//URL:     localhost:3001/usuario/14515778
	//Status:  OK
        app.get("/usuario/:id", function(request,response){

            var id = request.params.id;

            usuarioModel.getUsuarioById( id, function(error, data){

                if(error){
	            console.log("Error al invocar a getUsuarioById.");

	        }else{
                    if( data.length > 0 ){
			    response.status(200).json({
		                'result' : 0,
				'data_usuario' : data,
				'description' : 'Se han encontrado el usuario por su id.'
		            });

		    }else{
                        response.status(200).json({
			    'result' : 1,
			    'description' : 'No se ha encontrado el usuario.' 
			});
	           }
                }
            
           });
	});



	//POSTMAN: 
	//Metodo: GET 
	//URL:    localhost:3001/usuario/deleteId/13745275
	//Status: OK
	app.get("/usuario/deleteId/:id", function( request, response ){

	    var id = request.params.id;

            usuarioModel.getUsuarioById( id, function(error, data){

                if( error ){
		    console.log("Ha ocurrido un error al procesar la peticion de getUsuarioById.");

		}else{

		    if( data.length > 0 ){

                        usarioModel.deleteUsuario( id, function(error, data){

			    console.log("error"+error);

                            if(error){
			        throw error;
				console.log("Ha ocurrido un error al procesar la peticion a deleteUsuario.");
			                        
			    }else{
				//response.redirect('/usuarios');
				response.status(200).json({
				    'result' : 0,
				    'description' : 'El usuario se ha eliminado correctamente.'
				});
	                    }
			});

                    }else{
		
			response.status(200).json({
			    'result' : 1,
			    'description' : 'No se ha encontrado el usuario a eliminar.'
			});
															                      
		    }
	        }
            });


	});



	//POSTMAN
	//Metodo: POST
	//URL:    localhost:3001/usuario/edit/14515778
	//Status: OK
        app.post("/usuario/edit/:id", function( request, response ){
		                
	    var id = request.params.id;	                
            
	    usuarioModel.editUsuario( id, request, function(error, data){

		    if(error){
			 throw error;
                         console.log("Ha ocurrido un error al procesar la peticion a editUsuario.");

		    }else{
		         //response.redirect('/subcategorias');
			 response.status(200).json({
			 	'result': 0,
                                'description' : 'El registro del Usuario se ha actualizado correctamente.'
			 });
		    }
            });
	});


	
	//POSTMAN
	//Metodo: POST
	//URL: localhost:3001/usuario/insert
	//Status: 
	app.post("/usuario/insert", function( request, response ){

		var id = request.params.id;
		console.log( "id: "+id);
		usuarioModel.insertUsuario( id, request, function(error, data){
			
			if(error){
				throw error;
				console.log("Ha ocurrido un error al procesar la peticion a insertUsuario.");
			}else{
				//response.redirect('/subcategorias');
				response.status(200).json({
				    'result': 0,
				    'description' : 'El registro se ha insertado correctamente.'
			        });

			}
			
		});

	});
	

	
}


