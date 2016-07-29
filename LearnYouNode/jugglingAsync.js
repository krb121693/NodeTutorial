http = require('http');
bl = require('bl');
urls = [];

for (i = 2; i < process.argv.length; i++)
	urls.push(process.argv[i]);

printResults();

function httpGet(url) {
	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(err);
			console.log(data.toString());
			printResults();
		}))
	})
}

function printResults() {
	url = urls.shift();
	if (url != null)
		httpGet(url);
}