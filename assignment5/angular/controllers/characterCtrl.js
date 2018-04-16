

myApp.controller('characterCtrl', ['$http', 'apiService', '$routeParams', function($http, apiService, $routeParams) {
  var main = this;
  this.character = {};
  this.characterid = $routeParams.characterid;


  this.getCharacterFucntion = function() {
    apiService.getCharacter(main.characterid).then(function successCallback(response) {
        
        main.character = response.data;
        console.log(main.character);

      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.character;
  };
  main.getCharacterFucntion();

}]); 