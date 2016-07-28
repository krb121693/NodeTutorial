var url = 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/35509949/recent?api_key=701861ef-5e64-4c90-af18-fced09acb770';
var https = require('https');

https.get(url, function (response) {
	buffer = "";
	response.setEncoding('utf8');
	response.on('data', function (data) {
		buffer += data;
	})
	response.on('end', function () {
		var object = JSON.parse(buffer);
		console.log(object);

		for (var x = 0; x < object['games'].length; x++) {
			console.log(object['games'][x].gameId);
		}
	})
})