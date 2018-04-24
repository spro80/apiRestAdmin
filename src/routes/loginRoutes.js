
var path = require('path');

module.exports = function ( app ){
	
	app.get('/login', function(req, res){
		
		res.send('GET de login routes');
		//res.render('index', {title: 'Pagina de Login' });
		
	});
	
	
	app.post('/login', function(req, res){
		
		/*console.log(' **************** ');
		console.log( req.body );
		//{ usuario: '14', password: '808080' }
		console.log(' **************** ');
		console.log( JSON.stringify( req.body ) );
		//{"usuario":"14","password":"123456"}
		console.log(' **************** ');
		var input = JSON.parse( JSON.stringify( req.body ) );
		console.log( input );
		
		console.log(' **************** ');
		console.log( 'USUARIO: '+req.body.usuario );
		
		console.log(' **************** ');
		console.log( 'PASSWORD: '+req.body.password );		
		*/
		
		if( req.body.usuario == "1" && req.body.password == "123" ){
                    //console.log(' El usuario SI se ha validado correctamente...');
		    res.render( 'menu', { titulo: 'titulo del menu...' } );
		}else{
		    //console.log(' El usuario NO se ha validado correctamente...');
                    //console.log(' El usuario NO se ha validado correctamente...');
                    res.render( 'errorLogin', { titulo: 'Error al hacer Login...' } );
		}
		
		//res.send('POST de login routes');
		//res.render('index', {title: 'Pagina de Login' });
		
	});
	
}
