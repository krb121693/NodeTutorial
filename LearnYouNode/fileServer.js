serveTextFile();

function serveTextFile() {
	port = process.argv[2];
	file = process.argv[3];
	http = require('http');
	fs = require('fs');

	http.createServer(function (request, response) {
		response.writeHead(200, {'content-type': 'text/plain'})
		fs.createReadStream(file).pipe(response);
	}).listen(port);
}
