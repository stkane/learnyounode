//count lines of a given file: sync

var fs = require('fs');

var fileLocation = process.argv[2];

var file = fs.readFileSync(fileLocation) + ''; 

function countLines(data) {
	data = data.split('\n');
	data = data.length;
	data -= 1;
	console.log(data);
};

countLines(file);