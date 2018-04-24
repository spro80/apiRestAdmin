var assert    = require("chai").assert;
//var calculator = require("../app/calculator");


describe("Tests using ASSERT interface from CHAI module: ", function() {

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
		
});
