const express = require('express');
const path = require('path');
var worker = require('./worker');
const app = express();
//const Mongo = require('../database/mongo.js');

const port = process.env.PORT || 8080;

app.use(express.static('./client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + './index.html'));
});



app.listen(port, (err) => {
	if ( err ) {
		console.log('Server failed to start ', err);
	} else {
		console.log(`Sever running on port , ${port}`);
	}
});