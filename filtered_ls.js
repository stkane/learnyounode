var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(process.argv[2], function(err, files) {
	selectedFiles = [];
	if(err) {
		console.err(message);
	}
	for(let i = 0; i < files.length; i++) {
		filename = files[i];
		filenameAndExt = files[i].split('.');
		if(extension === filenameAndExt[1]) {
			selectedFiles.push(filename);
		}
	};
	for(let i = 0; i < selectedFiles.length; i++) {
		console.log(selectedFiles[i]);	
	};
})