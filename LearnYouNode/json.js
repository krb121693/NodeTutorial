serveJsonData();

function serveJsonData() {
	http = require('http');
	port = process.argv[2];
	url = require('url');
	result = undefined;
	pathTime = '/api/parsetime';
	pathUnix = '/api/unixtime';

	http.createServer(function (request, response) {
		urlObj = url.parse(request.url, true),
					pathname = urlObj.pathname,
					stringTime = urlObj.query.iso,
					result;

		if (pathname === pathTime) {
			result = getTimeObject(stringTime);
		} else if (pathname === pathUnix) {
			result = getUnixTimeStamp(stringTime);
		}

		if (result) {
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.end(JSON.stringify(result));
		} else {
			response.writeHead(404);
			response.end();
		}

	}).listen(port);
}


function getUnixTimeStamp(stringTime) {
  return {
    unixtime: getTimeStamp(stringTime)
  };  
}

function getTimeObject(stringTime) {
  var date = new Date(getTimeStamp(stringTime));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function getTimeStamp(stringTime) {
  return Date.parse(stringTime);
}