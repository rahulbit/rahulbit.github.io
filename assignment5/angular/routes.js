
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      
      templateUrl: 'views/listAll-view.html',
      controller: 'listAllCtrl',
      controllerAs: 'listAll'
    })
    .when('/view-book/:bookid', {
      templateUrl: 'views/book-view.html',
      controller: 'bookCtrl',
      controllerAs: 'currentBook'
    })
    .when('/view-house/:houseid', {
      templateUrl: 'views/house-view.html',
      controller: 'houseCtrl',
      controllerAs: 'currentHouse'
    })
    .when('/view-character/:characterid', {
      templateUrl: 'views/character-view.html',
      controller: 'characterCtrl',
      controllerAs: 'currentCharacter'
    })

    .otherwise({
      
      template: '<div class="notFound"><h1>404 page not found</h1><hr><a href="#/"> Go To HomePage</a></div>'
    });
}]);