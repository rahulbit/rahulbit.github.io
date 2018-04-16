

myApp.controller('houseCtrl', ['$http', 'apiService', '$routeParams', function($http, apiService, $routeParams) {
  var main = this;
  this.house = {};
  this.houseid = $routeParams.houseid;

 
  this.getHouseFucntion = function() {
    apiService.getHouse(main.houseid).then(function successCallback(response) {
      
        main.house = response.data;
        console.log(main.house);

      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.house;
  }; 
  main.getHouseFucntion();

}]); 