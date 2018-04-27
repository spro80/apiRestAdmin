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


var app = require('../../../app.js')

chai.use(chaiHttp);
const url= 'http://localhost:3001';


//https://www.paradigmadigital.com/dev/testeo-api-rest-mocha-chai-http/

//describe('get all usuarios: ',()=>{
describe('get all usuarios: ', function(){

	it('GET valida result OK', function(done){
            
            chai.request( url )
               .get('/usuario')
	       .end( function(err,res){    
	           
		   console.log(err);
                   console.log("******");
                   console.log(res.body);
		   console.log("******");
                   console.log( res.body.result );
                   console.log( typeof( res.body.result ) );
                   console.log( 200 );
                   //assert.typeOf( res.body.result , 0 );
		   assert.equal( res.body.result , 0, "Result incorrecto" );    
                   //expect( res.body.result ).to.have.status(200);
		   //assert.expect('Content-Type', /json/)		       

		   done();
								
		});

	});

});



describe('Insert Usuario: ',()=>{

    it('Insert valida insert usuario', (done) => {
        chai.request(url)
	    .post('/usuario/insert')
	    .send({ id_usuario:"15123456" , id_tipo_cliente: 1, rut_completo_usuario:"151234567", password_usuario:"808080", digito_rut_usuario:7, nombre_usuario:"juan", apellido_paterno_usuario:"diaz", apellido_materno_usuario:"muñoz", ciudad_usuario:"santiago", comuna_usuario:"santiago", direccion_usuario:"avda providencia", nro_direccion:1500, celular_usuario:"89194282", email_usuario:"jdiaz@gmail.com", whatsap_usuario:"56989194282", tipo_admin_usuario:1, vigencia_usuario:1  })
	    .end( function(err,res){
					
                console.log(res.body)
	        //expect(res).to.have.status(200);
		console.log("++++++++++++++++++++");
                console.log( res.body.result  );
		console.log("++++++++++++++++++++");
		assert.equal( res.body.result ,0, "Result incorrecto" );

	        done();

            });
    });
});



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
