//filter files based on extension using modules

var theFilter = require('./read_filter.js');
var directory = process.argv[2];
var extension = process.argv[3];

var callback = function(err, selectedFiles) {
	if (err) {
		console.log(err);
	}
	for (let i = 0; i < selectedFiles.length; i++) {
		console.log(selectedFiles[i]);
	}
};

theFilter(directory, extension, callback);
