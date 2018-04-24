	
module.exports = function ( app ){
	
	app.get("/", function(req,res){
		 
		 //response.send('index');
		 res.render('index' , { title: 'El titulo es Hello World' } );
		 //response.render('index.jade'  );
		 
	});
	 
	app.get("/index", function(req,res){
		 
		 //response.send('index');
		 res.render('index' , { title: 'El titulo es Hello World' } );
		 //response.render('index.jade'  );
		 
	});
	 
}
