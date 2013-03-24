function save(au) {
	if(typeof au === 'function'){ 
		au(); 
	}
}

save(function() { console.log('hola');});


var hola = {
	ei: function () {

		console.log("\n sfsfsdfsfsf");
	}
};

save(hola.ei);
