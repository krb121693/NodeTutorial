sendCurrentDate();

function sendCurrentDate() {
	net = require('net');
	port = process.argv[2];

	date = getDate();
	server = net.createServer(function (socket) {
		console.log('Client Connected');
		socket.end(date, function () {
			console.log('Client Disconnected');
		})
	})
	server.listen(port, function () {
		console.log('Server Bound');
	});
}

function getDate() {
	dateElements = getDateElements();
	data = dateElements[0] + '-' + dateElements[1] + '-' + 
		dateElements[2] + ' ' + dateElements[3]  + ':' + 
		dateElements[4] + '\n';
	return data;
}

function getDateElements() {
	date = new Date();

	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	hour = date.getHours();
	min = date.getMinutes();
	nums = [year, month, day, hour, min];
	nums = prefixZero(nums);

	return nums;
}

function prefixZero(nums){
	return nums.map(function(num){
		return (num < 10 ? '0' : '') + num;
	})
}