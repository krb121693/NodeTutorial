var fs = require('fs');
var path = require('path');
var buffer = undefined;
var ext = process.argv[3]; //Get file extension
var str = undefined;

ext = '.' + ext; //e.g. ext = . + txt = .

fs.readdir(process.argv[2], function readContents (err, dirContents) {
	buffer = dirContents;

	for (var i = 0; i < buffer.length; i++) {
		str = buffer[i].toString();

		if(ext === path.extname(str)) {
			console.log(str);
		}
	}
})