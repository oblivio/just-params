function JustParameters(){
	this.URLParameters = [];
	this.URLQuery = '';
};
JustParameters.prototype.init = function(){
	var JustParameters = this;
	JustParameters.URLParameters = JustParameters._GET();
	JustParameters.URLQuery = JustParameters._query();
	console.log('URLParameters',JustParameters.URLParameters);
	console.log('URLQuery',JustParameters.URLQuery);
};
JustParameters.prototype._query = function(blockArrIn){
	var JustParameters = this;
	var query  = '?';
	var blockArray = [];
	if(typeof blockArrIn !== 'undefined'){
		blockArray = blockArrIn;
	}
	$.each(JustParameters.URLParameters,function(key,val){
		if(jQuery.inArray(key, blockArray) !== -1){
			//ignored parameter
		}else{
			query += key+'='+val+'&';
		}
	});
	return query;
};
JustParameters.prototype._GET = function(paramKey){
	var JustParameters = this;
	//http://stackoverflow.com/questions/5818269/javascript-window-location-href-without-hash
	var urlSTR = location.protocol+'//'+location.hostname+(location.port?":"+location.port:"")+location.pathname+(location.search?location.search:"");
	
		var params = [];
		if(JustParameters.URLParameters.length == 0){
			//http://papermashup.com/read-url-get-variables-withjavascript/
			var vars = {};
			String(urlSTR).replace( 
				/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
				function( m, key, value ) { // callback
					vars[key] = value !== undefined ? value : '';
				}
			);
			params = vars;
		}else{
			params = JustParameters.URLParameters;
		}
		
		if ( paramKey ) {
			return params[paramKey] ? params[paramKey] : null;	
		}
		return params;
	
	
};

var JustParams = new JustParameters();
JustParams.init();