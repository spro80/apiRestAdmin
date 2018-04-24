const categoriaModel = require("../models/categoriaModels.js");

module.exports = function ( app ){
		
    app.get("/categorias", function(request,response){
        
        categoriaModel.getAllCategoria( function(error, data){
            
            if(error){
                console.log("Error al invocar a getAllSubcategoria.");

            }else{
                
                if( data.length > 0 ){
                    response.render('categorias/categorias' , { message:"Se han encontrado Categoria en BD." , data:data } );

                }else{
																									                      
                    response.render('categorias/categorias' , { message:"No se han encontrado Categoria." } );
																												}
            }
        });

    });

}
