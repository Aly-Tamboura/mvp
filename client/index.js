
const app = angular.module('StreetWatch', []);

app.controller('MapCtrl', function ( $scope, apiService) {
	//get data from database
	$scope.catLabels = [];
	$scope.locLabels =[];
	$scope.dateLabels =[];
	var obj1 = {}, obj2 = {}, obj3 = {};

	apiService.getCrimeData(function(data) {
		$scope.data = data;
  	$scope.filterData()
    $scope.data.forEach(function(record) {
    	obj1[record.category] = 1;
    	obj2[record.pddistrict] = 1;
    	obj3[record.date] = 1;
    });
    for(var key in obj1) {
    	$scope.catLabels.push(key)
    }
    for(var key in obj2) {
    	$scope.locLabels.push(key)
    }
    for(var key in obj3) {
    	$scope.dateLabels.push(key)
    }
	});


  $scope.filterData = function( type, location) {
  	location = location || 'MISSION';
  	type = type || 'ASSAULT';

	  var dates = $scope.data.filter(function(item) {
      if ( item.pddistrict === location && item.category === type) {
      	return item
      }
	  });
	  for (var i = 0; i < dates.length; i++) {
			createMarker(dates[i])
		}
  }

	 $scope.runData = function() {
	 	//remove
 		angular.forEach($scope.markers, function(marker) {
    marker.setMap(null);
    });
	 	$scope.filterData($scope.locationselect.model, $scope.locationselect.loc )
	 }

  var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.774172,-122.431558),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  }

  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();

  var createMarker = function (info) {

      var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(Number(info.y), Number(info.x)),
          title: info.pddistrict
      });

      marker.content = '<div class="infoWindowContent">' + info.category + '</div>';

      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open($scope.map, marker);
      });

      $scope.markers.push(marker);

  }
  $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
  }

});

app.directive("crimeData",function() {
  return {
    restrict: 'E',
    controller: 'MapCtrl',
    // bindTocontroller: true,
    // controllerAs: 'ctrl',
    restrict: `E`,
    template: `<div>
                <h1>StreetWatch</h1>
                <select-crime-filter><select-crime-filter>
                <select-location-filter></select-location-filter>
                <div id="map"></div>
              </div>`
  };
});


