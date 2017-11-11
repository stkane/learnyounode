var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function theClient(url1, url2, url3) {
	collection1 = "";
	collection2 = "";
	collection3 = "";
	count = 0;
	http.get(url1, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(data) {
			collection1 += data;
		})
		res.on('end', function() {
			count +=1;
			if (count === 3) {
				console.log(collection1);
				console.log(collection2);
				console.log(collection3);
			}
		});
	})
	http.get(url2, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(data) {
			collection2 += data;
		})
		res.on('end', function() {
			count += 1;
			if (count === 3) {
				console.log(collection1);
				console.log(collection2);
				console.log(collection3);
			}
		});
	})	
	http.get(url3, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(data) {
			collection3 += data;
		})
		res.on('end', function() {
			count +=1;
			if (count === 3) {
				console.log(collection1);
				console.log(collection2);
				console.log(collection3);
			}
		});	
	})	 
	}


theClient(url1, url2, url3);