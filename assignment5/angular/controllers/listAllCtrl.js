
myApp.controller('listAllCtrl', ['$http', 'apiService', function($http, apiService) {
  var main = this;
  this.books = [];
  this.characters = [];
  this.houses = [];
 


  this.LengthForCharacters = 50;
  this.LengthForHouses = 50; 

 


 
  this.getBooksFucntion = function() {
    apiService.getBooks().then(function successCallback(response) {
        main.books =response.data;
      },
      function errorCallback(response) {
        alert("some error occurred. Check the console.");
        console.log(response);
      });
    return main.books;

  };
  main.getBooksFucntion();



  
  this.getHousesFucntion = function() {
    for (var i = 1; i < main.LengthForHouses; i++) {
      apiService.getHouses([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.houses= response.data;
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } 
  }; 
  main.getHousesFucntion();
  



  this.getCharactersFucntion = function() {
    for (var i = 1; i < main.LengthForCharacters; i++) {
      apiService.getCharacters([i]).then(function successCallback(response) {
          if (response.data.length > 0) {
            main.characters= response.data;
          }
        },
        function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    } 
  }; 
  main.getCharactersFucntion();
  







}]);