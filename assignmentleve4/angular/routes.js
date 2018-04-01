//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	 templateUrl	: "views/index-view.html",
        	// Which controller it should use 
            controller 		: "blogController"
            // what is the alias of that controller.
        	
        })


        .when('/match',{

            templateUrl     : "views/single-view.html",
            controller      : "singleviewController"
            
        })
        .when('/stat',{

        	templateUrl     : "views/teamstat-view.html",
        	controller 		: "teamstatController"
        	
        })
        

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);