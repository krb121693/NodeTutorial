convertToUpper();

function convertToUpper() {
	port = process.argv[2];
	map = require('through2-map');
	http = require('http');

	http.createServer(function (request, response) {
		if (request.method === 'POST') {
			request.pipe(map(function(chunk) {
				return chunk.toString().toUpperCase();
			})).pipe(response)
		}
	}).listen(port);
}