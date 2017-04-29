const app = angular.module('StreetWatch', []);

app.directive("crimeData", function() {
  return {
		controller: function ( $scope, apiService ) {
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