app.service('apiService', function($http) {
  this.getCrimeData = function(callback) {
    $http.get('/data')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});