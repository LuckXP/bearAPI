var express = require('express');
var app = express();

var becky = {
	name: 'Becky',
	id: 'Brown',
	age: 38,
	gender: 'Female'
}

var jesse = {
	name: 'Jesse',
	id: 'Brown',
	age: 27,
	gender: 'Male'
}

var jabob = {
	name: 'Jacob',
	id: 'Brown',
	age: 12,
	gender: 'Male'
}

var monte = {
	name: 'Monte',
	id: 'Brown',
	age: 43,
	gender: 'Male'
}

var bears =[becky, jesse, jabob, monte]


app.get('/api/bears', function(req, res) {
	
	res.json(bears)
});

app.listen(3000, function() {
	console.log('the server is up and running..');
});