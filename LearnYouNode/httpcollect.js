var bl = require('bl');
var url = process.argv[2];
var http = require('http');
console.log(process.argv)

http.get(url, function (response) {
	response.pipe(bl(function (err, data) {
		console.log(data.toString());
	}))
})