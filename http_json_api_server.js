// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.

var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
	reqUrl = url.parse(req.url);
	reqPath = url.parse(req.url).pathname;

	if (reqPath == '/api/parsetime') {
		timeStamp = reqUrl.query.substring(4);
		urlTime = new Date(timeStamp);	
		hours = urlTime.getHours();
		minutes = urlTime.getMinutes();
		seconds = urlTime.getSeconds();
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({
			"hour": hours,
			"minute": minutes,
			"second": seconds
		}));
		
	}
	if (reqPath == '/api/unixtime') {
		timeStamp = reqUrl.query.substring(4);
		urlTime = new Date(timeStamp);	
		unixTime = urlTime.getTime();
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({
			"unixtime": unixTime,
		}));
	}
	res.end();
})

server.listen(port);