//var UTILITIES = require("../lib/utilities/utilities.js");

const subcategoriaModel = require("../models/subcategoriaModels.js");

module.exports = function ( app ){
	
	 app.get("/subcategorias", function(request,response){
		 
		 subcategoriaModel.getAllSubcategoria( function(error, data){
			if(error){
				console.log("Error al invocar a getAllSubcategoria.");
			}else{
				if( data.length > 0 ){
					response.render('subcategorias/subcategorias' , { message:"Se han encontrado Subcategoria en BD." , data:data } );
				}else{
					response.render('subcategorias/subcategorias' , { message:"No se han encontrado Subcategoria." } );
				}
			}
		 });
		 
	 });
	 
	app.get("/subcategorias/addForm", function( request, response ){
		 response.render( 'subcategorias/addFormSubcategoria', { message: " Loading Form for Add. " }  );
		 //console.log("AAAA");
		 //response.redirect( 'subcategoria/addFormSubcategoria' );
		 
	});
	
	app.get("/subcategorias/editForm/:id", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.editFormSubcategoria( id, function(error, data){
			
			if( error ){
				throw error;
			}else{
				console.log(data);
				if( data.length > 0 ){
					//console.log("Se han encontrado "+data.length+" registros.");
					response.render( 'subcategorias/editFormSubcategoria' , { message: "Se han encontrado subcategorias" , data:data } );
				}else{
					//console.log("NO se han encontrado registros.");
					response.render( 'subcategorias/editFormSubcategoria' , { message: "No se han encontrado Subcategorias." , data:data } );
				}
			}
		}); 
	});
	
	app.get("/subcategorias/deleteId/:id", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.deleteSubcategoria( id, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategorias');
			}
		});
	});
	
	app.post("/subcategorias/editSave/:id", function( request, response ){
		
		var id = request.params.id;
		
		subcategoriaModel.editSubcategoria( id, request, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategorias');
			}
		});
	});
	
	app.post("/subcategorias/addSave", function( request, response ){
		
		var id = request.params.id;
		subcategoriaModel.insertSubcategoria( id, request, function(error, data){
			
			if(error){
				throw error;
			}else{
				response.redirect('/subcategorias');
			}
			
		});
	});
	
}


