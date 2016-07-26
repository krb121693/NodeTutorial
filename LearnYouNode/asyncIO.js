var fs = require('fs');
var buffer = undefined;
var str = undefined;

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	buffer = fileContents;
	str = buffer.toString();
	str = str.split("\n");

	console.log(str.length - 1);
})