const app = angular.module('StreetWatch', []);

app.directive("crimeData", function() {
  return {
		controller: function ( $scope ) {
			$scope.data = testData;
			console.log(testData)
		},
    restrict: `E`,
    template: `<h1>Street Watch</h1>`
  };
});