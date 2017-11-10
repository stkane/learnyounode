var fs = require('fs');

module.exports = function (directory, extension, callback) {
		fs.readdir(directory, function(err, files) {
		selectedFiles = [];
		if(err) {
			return callback(err);
		}
		for(let i = 0; i < files.length; i++) {
			filename = files[i];
			filenameAndExt = files[i].split('.');
			if(extension === filenameAndExt[1]) {
				selectedFiles.push(filename);
			}	
		};
		return callback(null, selectedFiles);
	})	
}

