//console.log('testttt');

var assert = require("chai").assert;


//require
var ConfigurationLog =  require("../../config/configurationLog.js");
var conf = new ConfigurationLog();
//console.log( conf.setLogLevel("INFO") );
//console.log( conf.getLogLevel()   );


//var inst = confLog.ConfigurationLog();
//instConfigLog().setLogLevel();


describe("TEST ConfigurationLog", function(){
    console.log("Iniciando en TEST ConfigurationLog.");



    it(" TEST metodo setLogLevel ", function(){
        console.log( "Iniciando en TEST metodo setLogLevel" );

	//Set level log
	let expectedSetLogLevel = conf.setLogLevel("INFO");

	//Assert
        assert.equal( "INFO"  , expectedSetLogLevel );
    });



    it(" TEST metodo getLogLevel ", function(){
        console.log( "Iniciando en TEST metodo getLogLevel" );
        let expected = {};
        expected.result = 0;

        //Set level log
	conf.setLogLevel("DEBUG");
   
	//Assert
        assert.equal( "DEBUG", conf.getLogLevel() );
    });



});
