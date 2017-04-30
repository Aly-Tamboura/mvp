
app.directive("selectLocationFilter", function() {
  return {
    controller: function($scope) {
      console.log($scope)
    },
    restrict: 'E',
    template: `<select name='selectType' class="selectpicker">
                    <option ng-click="runData('daffy')" ng-repeat="item in labels"value="a"></option>
								</select>
								`
  };
});