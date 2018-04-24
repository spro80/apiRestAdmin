
function ConfigurationLog( ){
    this.level = "";
}

ConfigurationLog.prototype.setLogLevel = function( level ){
    this.level = level;	
    return this.level;
	
}

ConfigurationLog.prototype.getLogLevel = function( ){
    return this.level;	
}

module.exports = ConfigurationLog;
