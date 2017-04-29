const express = require('express');
const path = require('path');
var worker = require('./worker');
const bodyParser = require('body-parser');
const Data = require('../database/mongo.js');
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + './node_modules'));

app.use(express.static('./client'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + './index.html'));
});

app.get('/data', function (req, res) {
	Data.find({}, function (err, data) {
		if ( err ) {
			throw err
		} else {
			res.end(JSON.stringify(data));
		}
	})
})

app.listen(port, (err) => {
	if ( err ) {
		console.log('Server failed to start ', err);
	} else {
		console.log(`Sever running on port , ${port}`);
	}
});