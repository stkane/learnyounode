//count lines of a given file: async

var fs = require('fs');

var location = process.argv[2];

fs.readFile(location, function(err, data){
	if(err){
		return console.log(err);
	}
	data = data.toString();
	data = data.split('\n');
	data = data.length;
	data -= 1;
	console.log(data);
});



