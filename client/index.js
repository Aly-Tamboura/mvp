
const app = angular.module('StreetWatch', ['ngMap']);

app.directive("crimeData", function() {
  return {
		controller: function ( $scope, apiService ) {

		  // NgMap.getMap().then(function(map) {
		  //   console.log(map.getCenter());
		  //   console.log('markers', map.markers);
		  //   console.log('shapes', map.shapes);
		  // });

			//$scope.data = testData;
			// console.log(apiService)
			apiService.getCrimeData(function(data) {
				//console.log(data);
				$scope = data;
			})
		},
    restrict: `E`,
    template: `<h1>Street Watch</h1>`
  };
});