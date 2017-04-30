



app.directive("selectCrimeFilter", function() {
  return {
    controller: function($scope) {
$scope.locationselect = {
      model: null,
      loc: null,
      crimeOptions: $scope.catLabels,
      locationOptions: $scope.locLabels,
     };
    },
    restrict: 'E',

    template: `

              <label for="repeatSelect">Criminal Activity</label>
              <select name="repeatSelect" id="repeatSelect" ng-model="locationselect.model">
                <option value="">---Please select---</option>
                <option ng-repeat="option in locationselect.crimeOptions" value="{{option}}">{{option}}</option>
              </select>

              <label for="locSelect">Neighborhood</label>
              <select name="locSelect" id="locSelect" ng-model="locationselect.loc">
                <option value="">---Please select---</option>
                <option ng-repeat="location in locationselect.locationOptions" value="{{location}}">{{location}}</option>
              </select>

               <button ng-click="runData()" class="btn btn-danger btn-sm">Select</button>
								`
  };
});