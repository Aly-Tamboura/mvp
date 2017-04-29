var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://127.0.0.1:27017/sfcrime', function(err, db) {
  if ( !err ) {
    console.log('database is connected')
  }
});
var db = mongoose.connection;

var dataSchema = mongoose.Schema({
	address: String,
  category: String,
  date: String,
  dayofweek: String,
  descript: String,
  incidntnum: String,
  pddistrict: String,
  resolution: String,
  time: String,
  x: String,
  y: String
});


var Data = mongoose.model('Data', dataSchema);


module.exports = Data;
