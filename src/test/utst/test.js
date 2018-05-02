/*var assert    = require("chai").assert;
//var calculator = require("../app/calculator");
const expect  = require('chai').expect;
const fetch   = require('node-fetch');
const SERVER = 'localhost:3001';
*/


let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
var assert    = require("chai").assert;



//const usuarioModel = require("../../models/usuarioModels.js");
var app = require('../../../app.js');
const usuarioModel = require("../../models/usuarioModels.js");



chai.use(chaiHttp);
const url= 'http://localhost:3001';



console.log("prueba heroku 3");
console.log("\n\n TEST PARA PROBAR API REST DE USUARIOS");

describe('USUARIO: Insert Usuario: ', function(){


	    it('USUARIO: Valida Insert del Usuario', function(done){

                let jsonInsert = {
		    id_usuario:"11111111" ,
		    id_tipo_cliente: 1,
                    rut_completo_usuario:"111111112",
                    password_usuario:"808080",
                    digito_rut_usuario:2,
                    nombre_usuario:"juan",
                    apellido_paterno_usuario:"diaz",
                    apellido_materno_usuario:"muñoz",
                    ciudad_usuario:"santiago",
                    comuna_usuario:"santiago",
                    direccion_usuario:"avda providencia",
                    nro_direccion:1500,
                    celular_usuario:"89194282",
                    email_usuario:"jdiaz@gmail.com",
                    whatsap_usuario:"56989194282",
                    tipo_admin_usuario:1,
                    vigencia_usuario:1
		};

                chai.request(url)
		    .post('/usuario/insert')
		    .send( jsonInsert )
		    .end( function(err,res){
		    
	                 if( err ){
	                     console.log("ERROR: "+err);
 
		         }else{
                             console.log("\n");
                             console.log("**********INIT - INSERT USUARIO********");
		             console.log( "res.status: "+res.status );
                             assert.equal( res.status , 200 );
                             assert.equal( res.body.result , 0 );
                             console.log("**********END - INSERT USUARIO********");
                         }
	             
	                 done();
                     });
           });
});




describe('USUARIO: Editar Usuario: ', function(){
    
    it('USUARIO: Valida Edicion del Usuario', function(done){
        let jsonEdit = {
            "id_tipo_cliente"          : 2,
	    "password_usuario"         : "qwerty",	
	    "nombre_usuario"           : "Nombre Modificadoi2222",
	    "apellido_paterno_usuario" : "Apellido Paterno Modificado",
            "apellido_materno_usuario" : "Apellido Materno Modificado",
	    "ciudad_usuario"           : "Ciudad Modificado",
	    "comuna_usuario"           : "Comuna Modificado",
	    "direccion_usuario"        : "Direccion Modificado",
	    "nro_direccion"            : 666,
	    "celular_usuario"          : "912345678",
	    "email_usuario"            : "Email Modificado",
	    "whatsap_usuario"          : "+56912345678",
	    "tipo_admin_usuario"       : 100,
	    "vigencia_usuario"         : 101
        };
	    
	    
                chai.request(url)
	            .post('/usuario/edit/11111111')
                    .send( jsonEdit )
                    .end( function(err,res){

                        if( err ){
                            console.log("ERROR: "+err);
                        }else{
                            console.log("\n");
                            console.log("**********INIT - EDIT USUARIO********");
                            console.log( "res.status: "+res.status );
                            assert.equal( res.status , 200 );
                            assert.equal( res.body.result , 0 );
                            console.log("**********END - EDIT  USUARIO********");
                        }
                        done();
                    });
    });

});






//https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/
describe('USUARIO - DELETE', function(){

    it('USUARIO - delete usuario by id', function(done){
        chai.request( url )
            .get('/usuario/deleteId/11111111')
	    .end( function(err,res){
				          
                if( err != null ){
		    console.log("ERROR: "+err);

                }else{
                    console.log("\n");
	            console.log("**********INIT - DELETE USUARIO");
                    console.log( "res.status: "+res.status );
                    assert.equal( res.status , 200, "Valor obtenido es"+ res.status +"y se esperaba un 200" );
	            assert.equal( res.body.result , 0 , "Valo obtenido es"+ res.body.result +"y se esperaba un 0");
		    
	            console.log("**********END - DELETE USUARIO********\n");

                }

		done();

            });

    });

})




//describe('get all usuarios: ',()=>{
describe('USUARIO - GET ALL', function(){

	it('USUARIO - Valida GET ALL', function(done){
            
            chai.request( url )
               .get('/usuario')
	       .end( function(err,res){    
	          
		   if( err != null ){
		       console.log("ERROR: "+err);
		   
		   }else{

		       console.log("\n");
		       console.log("**********INIT - GET ALL USUARIO********");
                       console.log( "res.status: "+res.status );
		       assert.equal( res.status , 200, "Valor obtenido es"+ res.status +"y se esperaba un 200" );
		       assert.equal( res.body.result , 0 , "Valo obtenido es"+ res.body.result +"y se esperaba un 0");
		       console.log("**********END - GET ALL USUARIO********\n");

		   }

		   done();
								
		});

	});

});




describe('USUARIO - GET Usuario By ID', function(){
    
    it('USUARIO - Valida usuario por id_usuario', function(done){
    	
        chai.request(url)
	    .get('/usuario/14515778')
	    .end( function(err,res){		
                

		if( err ){
 		    console.log("ERROR: "+err);

		}else{

	            console.log("\n");		
                    console.log("**********INIT - GET USUARIO BY ID********");
                    console.log( "res.status: "+res.status );
                    //console.log( res.body );
                    //console.log( res );
                    assert.equal( res.status , 200 );
                    assert.equal( res.body.result , 0 );

                    assert.equal( res.body.data_usuario[0].id_usuario , "14515778" );
                    assert.equal( res.body.data_usuario[0].id_tipo_cliente , 1 );
                    assert.equal( res.body.data_usuario[0].rut_completo_usuario , "145157781" );
                    assert.equal( res.body.data_usuario[0].password_usuario , "123456" );
                    assert.equal( res.body.data_usuario[0].digito_rut_usuario , "1" );
                    assert.equal( res.body.data_usuario[0].nombre_usuario , "david" );
                    assert.equal( res.body.data_usuario[0].apellido_paterno_usuario , "diaz" );
                    assert.equal( res.body.data_usuario[0].apellido_materno_usuario , "sierra" );
                    assert.equal( res.body.data_usuario[0].ciudad_usuario , "santiago" );
                    assert.equal( res.body.data_usuario[0].comuna_usuario , "santiago" );
                    assert.equal( res.body.data_usuario[0].direccion_usuario , "fray camilo henriquez 190" );
                    assert.equal( res.body.data_usuario[0].nro_direccion , null );
                    assert.equal( res.body.data_usuario[0].celular_usuario , "94298318" );
                    assert.equal( res.body.data_usuario[0].email_usuario , null );
	            assert.equal( res.body.data_usuario[0].whatsap_usuario , "+56994298318" );
		    assert.equal( res.body.data_usuario[0].tipo_admin_usuario , 1 );
		    assert.equal( res.body.data_usuario[0].vigencia_usuario , 1 );

		    console.log("**********END - GET USUARIO BY ID********");

                }
		
		done();

	    });

    });

});




/*
describe('USUARIO: Insert Usuario: ', function(){

    let jsonInsert = { 
                        id_usuario:"11111111" , 
	                id_tipo_cliente: 1, 
	                rut_completo_usuario:"111111112", 
	                password_usuario:"808080", 
	                digito_rut_usuario:2, 
	                nombre_usuario:"juan", 
	                apellido_paterno_usuario:"diaz", 
	                apellido_materno_usuario:"muñoz", 
	                ciudad_usuario:"santiago", 
	                comuna_usuario:"santiago", 
	                direccion_usuario:"avda providencia", 
	                nro_direccion:1500, 
	                celular_usuario:"89194282", 
	                email_usuario:"jdiaz@gmail.com", 
	                whatsap_usuario:"56989194282", 
	                tipo_admin_usuario:1, 
	                vigencia_usuario:1 
                    };
    

    it('USUARIO: Valida Insert del Usuario', function(done){
        chai.request(url)
	    .post('/usuario/insert')
	    .send( jsonInsert )
	    .end( function(err,res){
			
                if( err ){
	            console.log("ERROR: "+err);

	        }else{

		   console.log("\n");
                   console.log("**********INIT - INSERT USUARIO********");

                   assert.equal( res.status , 200 );
	           assert.equal( res.body.result , 0 );

	           console.log("**********END - INSERT USUARIO********");

	        }

	        done();

            });
    });
});
*/




/*
describe('delete the country with id 1: ',()=>{

    it('should delete the country with id 1', (done) => {
        
        chai.request(url)
	    .get('/usuario')
	    .end( function(err,res){

		console.log("--------");    
                console.log(res.body);
		console.log("--------");

		//assert.equal( res.body.result ,0, "Result incorrecto" );

		assert.equal( 0 ,0, "Result incorrecto" );



		//expect(res.body).to.have.lengthOf(2);
		//expect(res).to.have.status(200);

		
		chai.request(url)
		    .get('/usuario/deleteId/14515778')
	            .end( function(err,res){
		    //.end( function(err,res){

		        //console.log(res.body);
			//expect(res).to.have.status(200);
			chai.request(url)
 			    .get('/usuario')
			    .end( function(err,res){

			        console.log(res.body);
				expect(res.body).to.have.lengthOf(1);

				expect(res.body[0]).to.have.property('id_usuario').to.be.equal(0);
				expect(res).to.have.status(200);
				done();

			});

                    });

            });
	 
    });

});
*/




/*

+--------------------------+--------------+------+-----+---------+-------+
	| Field                    | Type         | Null | Key | Default | Extra |
	+--------------------------+--------------+------+-----+---------+-------+
	| id_usuario               | varchar(8)   | NO   | PRI | NULL    |       |
	| id_tipo_cliente          | int(11)      | YES  | MUL | NULL    |       |
	| rut_completo_usuario     | varchar(9)   | YES  |     | NULL    |       |
	| password_usuario         | varchar(50)  | YES  |     | NULL    |       |
	| digito_rut_usuario       | varchar(1)   | YES  |     | NULL    |       |
	| nombre_usuario           | varchar(255) | YES  |     | NULL    |       |
	| apellido_paterno_usuario | varchar(255) | YES  |     | NULL    |       |
	| apellido_materno_usuario | varchar(255) | YES  |     | NULL    |       |
	| ciudad_usuario           | varchar(255) | YES  |     | NULL    |       |
	| comuna_usuario           | varchar(255) | YES  |     | NULL    |       |
	| direccion_usuario        | varchar(255) | YES  |     | NULL    |       |
	| nro_direccion            | int(11)      | YES  |     | NULL    |       |
	| celular_usuario          | varchar(11)  | YES  |     | NULL    |       |
	| email_usuario            | varchar(255) | YES  |     | NULL    |       |
	| whatsap_usuario          | varchar(12)  | YES  |     | NULL    |       |
	| tipo_admin_usuario       | tinyint(1)   | YES  |     | NULL    |       |
	| vigencia_usuario         | int(11)      | YES  |     | NULL    |       |
	+--------------------------+--------------+------+-----+---------+-------+


*/




/*
var assert = require('assert');
var request = require('supertest')
var app = require('../../../app.js')

var request = request("http://localhost:3001")


describe('API usuarios:', function() {


        before(function() {
		// Se ejecuta antes de todas las pruebas del bloque
		console.log(" BEFORE\n");      
	});
		
		
	after(function() {
		// Se ejecuta después de todas las pruebas del bloque
		console.log(" AFTER");
		
	});


	beforeEach(function() {
		// Se ejecuta antes de cada prueba del bloque
		console.log(" BEFORE EACH");
	});
		

	afterEach(function() {
		// Se ejecuta después de cada prueba del bloque
		console.log(" AFTER EACH \n\n");
	});


	describe('GET', function(){
		it('Should return paso 1 json as default data format', function(done){
				                   request.get('/usuario')
				                       .expect('Content-Type', /json/)
				                       .expect(200, done);
		});
	});


	describe('GET', function(){
		it('Should return paso 2 json as default data format', function(done){
						    request.get('/usuario')
						        .expect('Content-Type', /json/)
						        .expect(200, done);
		});
	});

});

*/







/*
describe('API REST', function () {

	it("GET /usuarios ", function() {
		result   = "text tested";//calculator.addTested("text");
		assert.equal(result, "text tested");


	}); 


	
//	  it('GET /users debe devolver todos los usuarios', async () => {
        it("Check the returned value using: assert.equal(value,'value'): ", function() {
	              
		      result   = "text tested";//calculator.addTested("text");
	              assert.equal(result, "text tested");

		   
		      const response = await fetch(SERVER + '/usuario');
		      expect(response.status).to.be.equal(200);
		   
		      //const users = await response.json();
		      //expect(users).to.be.an('Array');
		      //for (let usr of users) {
			//            expect(usr).to.be.an('Object');
			  //          expect(usr.id).to.be.a('Number');
			    //        expect(usr.name).to.be.a('String');
//			           expect(usr.username).to.be.a('String');
//			            expect(usr.email).to.be.a('String');
//			          }
		   
//		    });
	

});
*/


/*
describe("Tests using ASSERT interface from CHAI module: ", function() {


	before(function() {
	    // Se ejecuta antes de todas las pruebas del bloque
            console.log("    Se ejecuta antes de todas las pruebas del bloque\n");	
	});


	after(function() {
            // Se ejecuta después de todas las pruebas del bloque
 	    console.log("    Se ejecuta despues de todas las pruebas del bloque");

	});


        beforeEach(function() {
	    // Se ejecuta antes de cada prueba del bloque
            console.log("        Se ejecuta antes de cada prueba del bloque");
	});


	afterEach(function() {
	    // Se ejecuta después de cada prueba del bloque
            console.log("        Se ejecuta despues de cada prueba del bloque\n\n");
	});


	describe("Check addTested Function: ", function() {
		
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = "text tested";//calculator.addTested("text");
			assert.equal(result, "text tested");
		});		
		
		it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
			result   = "string2";//calculator.addTested("text");
			assert.typeOf(result, "string");
		});		
		
		it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
			result   = "holaMundo";//calculator.addTested("text");
			assert.lengthOf( result , 9 );
		});

	});	
		
});*/
