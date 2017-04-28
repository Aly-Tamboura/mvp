const app = angular.module('StreetWatch', []);

app.directive("crimeData", function() {
  restrict:
  return {
        template: `<h1>Street Watch</h1>`
  };
});