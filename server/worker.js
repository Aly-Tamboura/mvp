var Data = require('../database/mongo');
var request = require('request');

var getData = function(callback) {
	request('https://data.sfgov.org/resource/gxxq-x39z.json', function (err, response, body) {
    if ( err ) {
		  callback(err, null);
    } else {
    	callback(null, body);
    }
	});
};
//this is the function which needs a cron method put on it
//////////////////////////////////////////////////////////
// getData(function(err, data) {
//   if ( err ) {
//   } else {
//     var item = JSON.parse(data);
//     //console.log(parsedData)
// 	  for (var i = 0; i < item.length; i++) {

//       var crime = new Data({
//       	address: item[i].address,
// 			  category: item[i].category,
// 			  date: item[i].date,
// 			  dayofweek: item[i].dayofweek,
// 			  descript: item[i].descript,
// 			  incidntnum: item[i].incidntnum,
// 			  pddistrict: item[i].pddistrict,
// 			  resolution: item[i].resolution,
// 			  time: item[i].time,
// 			  x: item[i].x,
// 			  y: item[i].y
//       })

//       crime.save(function(err) {
//       	if ( err ) {
//       		console.log('error saving');
//       	} else {
//       		console.log('saved');
//       	}
//       })
// 	  }
//   }
// })