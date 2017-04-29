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
// 		console.log('cannot get data' , err);
//   } else {
//     //console.log('got the data',data )
//     var item = JSON.parse(data);
//     //console.log(parsedData)
// 	  for (var i = 0; i < 1; i++) {

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

// 	  	console.log('this is the crime ',crime);

//       crime.save(function(err) {
//       	if ( err ) {
//       		console.log('saved');
//       	} else {
//       		console.log('error saving');
//       	}
//       })
// 	  }

//   }

// })