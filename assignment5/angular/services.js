myApp.service('apiService', function apiFactory($http) {

  var baseUrl = 'https://anapioficeandfire.com/api';
 

  this.getBooks = function() {
    return $http.get(baseUrl + '/books?page=1&pageSize=50');
  }
  this.getHouses = function(pagenox) {
    return $http.get(baseUrl + '/houses?page=' + pagenox + '&pageSize=50')

  }
  this.getCharacters = function(pageno) {
    return $http.get(baseUrl + '/characters?page=' + pageno + '&pageSize=50')
  }
   this.getBook = function(bookid) {
    return $http.get(baseUrl + '/books/' + bookid)

  }

  this.getHouse = function(houseid) {
    return $http.get(baseUrl + '/houses/' + houseid)

  }

  this.getCharacter = function(characterid) {
    return $http.get(baseUrl + '/characters/' + characterid)

  }


  


}); 