
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.controller('blogController', function($scope) {

  $scope.data = 
                  [
                   
                    {
                         "id":1,
                         "date": "2015-08-08",
                           "team1": {
                                       "key": "manutd",
                                       "name": "Manchester United",
                                        "code": "MUN",
                                         "fouls":1,
                                         "cards":{
                                             "Yellow":1,
                                               "red":1
                                         }
                                       

                                    },
                           "team2": {
                                       "key": "tottenham",
                                       "name": "Tottenham Hotspur",
                                       "code": "TOT",
                                        "fouls":2,
                                         "cards":{
                                             "Yellow":1,
                                               "red":0
                                         }
                                      
                                     },

                            
                         "score1": 1,
                          "score2": 0
                },



                {
                          "id":2,
                         "date": "2015-08-14",
                           "team1": {
                                    "key": "astonvilla",
                                    "name": "Aston Villa",
                                     "code": "AVL",
                                      "fouls":3,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }

                                    

                                   },
                          "team2": {
                                    "key": "manutd",
                                    "name": "Manchester United",
                                    "code": "MUN",
                                     "fouls":5,
                                         "cards":{
                                             "Yellow":2,
                                               "red":2
                                         }
                                    
                                  },
                           
                           "score1": 0,
                           "score2": 1
                },

                {
                          "id":3,
                        "date": "2016-08-19",
                                 "team1": {
                                         "key": "manutd",
                                          "name": "Manchester United",
                                         "code": "MUN",
                                          "fouls":3,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }
                                        
                                         },
                                 "team2": {
                                             "key": "southampton",
                                             "name": "Southampton",
                                            "code": "SOU",
                                             "fouls":2,
                                         "cards":{
                                             "Yellow":1,
                                               "red":0
                                         }
                                            
                                           },
                                "score1": 2,
                                "score2": 0
            },
            {
                             "id":4,
                          "date": "2015-08-15",
                                        "team1": {
                                         "key": "southampton",
                                         "name": "Southampton",
                                          "code": "SOU",
                                           "fouls":6,
                                         "cards":{
                                             "Yellow":2,
                                               "red":0
                                         }
                                          
                                            },
                                      "team2": {
                                           "key": "everton",
                                           "name": "Everton",
                                           "code": "EVE",
                                            "fouls":5,
                                         "cards":{
                                             "Yellow":3,
                                               "red":0
                                         }
                                           
                                           },
                                           "score1": 0,
                                           "score2": 3
        },



        {
                                     "id":5,
                                "date": "2017-08-17",
                                      "team1": {
                                           "key": "astonvilla",
                                            "name": "Aston Villa",
                                             "code": "AVL",
                                              "fouls":4,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }
                                            
                                               },
                                     "team2": {
                                           "key": "manutd",
                                            "name": "Manchester United",
                                            "code": "MUN",
                                             "fouls":5,
                                         "cards":{
                                             "Yellow":3,
                                               "red":0
                                         }
                                            
                                                 },
                                          "score1": 0,
                                           "score2": 1
        }







             ]






   


}); // end controller


myApp.controller('teamstatController' , function ($scope) {

  $scope.mydata=
                         [


                              {
                                       "name": "Aston Villa",
                                        "stat": {

                                            "totalmatch": "10",
                                            "won": "7",
                                             "lost": "3",
                                             "goals":"30",
                                              "fouls":"8"
                                                },

                                        "cards":{
                                                "yellow":"5",
                                                "red":"1"
                                                 }
                                            
                                },


                                 {
                                        "name": "Manchester United",
                                         "stat": {
                                                  "totalmatch": "10",
                                                   "won": "5",
                                                   "lost": "5",
                                                   "goals":"20",
                                                     "fouls":"10"
                                                     },

                                          "cards":{
                                                "yellow":"2",
                                                "red":"0"
                                                  }
                                               
                                },


                                {
                                          "name": "Arsenal",
                                           "stat": {
                                                      "totalmatch": "15",
                                                       "won": "9",
                                                       "lost": "6",
                                                       "goals":"50",
                                                        "fouls":"11"
                                                         },
                                            "cards":{
                                                "yellow":"3",
                                                "red":"1"
                                                    }
                                                  
                                },


                                {

                                            "name": "barcelona",
                                             "stat": {
                                                       "totalmatch": "15",
                                                        "won": "12",
                                                        "lost": "3",
                                                         "goals":"60",
                                                          "fouls":"8"
                                                        },
                                            "cards":{
                                                "yellow":"2",
                                                "red":"0"
                                                    }
                                                      
                                }



                                  
               ]

               $scope.pageHeading = 'English Premier league';
                $scope.pageSubHeading = ' Two Sides One Victory ';

});


myApp.controller('singleviewController', function($scope) {





  $scope.data = 
                  [
                   
                    {
                         "id":1,
                         "date": "2015-08-08",
                           "team1": {
                                       "key": "manutd",
                                       "name": "Manchester United",
                                        "code": "MUN",
                                         "fouls":1,
                                         "cards":{
                                             "Yellow":1,
                                               "red":1
                                         }
                                       

                                    },
                           "team2": {
                                       "key": "tottenham",
                                       "name": "Tottenham Hotspur",
                                       "code": "TOT",
                                        "fouls":2,
                                         "cards":{
                                             "Yellow":1,
                                               "red":0
                                         }
                                      
                                     },

                            
                         "score1": 1,
                          "score2": 0
                },



                {
                          "id":2,
                         "date": "2015-08-14",
                           "team1": {
                                    "key": "astonvilla",
                                    "name": "Aston Villa",
                                     "code": "AVL",
                                      "fouls":3,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }

                                    

                                   },
                          "team2": {
                                    "key": "manutd",
                                    "name": "Manchester United",
                                    "code": "MUN",
                                     "fouls":5,
                                         "cards":{
                                             "Yellow":2,
                                               "red":2
                                         }
                                    
                                  },
                           
                           "score1": 0,
                           "score2": 1
                },

                {
                          "id":3,
                        "date": "2016-08-19",
                                 "team1": {
                                         "key": "manutd",
                                          "name": "Manchester United",
                                         "code": "MUN",
                                          "fouls":3,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }
                                        
                                         },
                                 "team2": {
                                             "key": "southampton",
                                             "name": "Southampton",
                                            "code": "SOU",
                                             "fouls":2,
                                         "cards":{
                                             "Yellow":1,
                                               "red":0
                                         }
                                            
                                           },
                                "score1": 2,
                                "score2": 0
            },
            {
                             "id":4,
                          "date": "2015-08-15",
                                        "team1": {
                                         "key": "southampton",
                                         "name": "Southampton",
                                          "code": "SOU",
                                           "fouls":6,
                                         "cards":{
                                             "Yellow":2,
                                               "red":0
                                         }
                                          
                                            },
                                      "team2": {
                                           "key": "everton",
                                           "name": "Everton",
                                           "code": "EVE",
                                            "fouls":5,
                                         "cards":{
                                             "Yellow":3,
                                               "red":0
                                         }
                                           
                                           },
                                           "score1": 0,
                                           "score2": 3
        },



        {
                                     "id":5,
                                "date": "2017-08-17",
                                      "team1": {
                                           "key": "astonvilla",
                                            "name": "Aston Villa",
                                             "code": "AVL",
                                              "fouls":4,
                                         "cards":{
                                             "Yellow":2,
                                               "red":1
                                         }
                                            
                                               },
                                     "team2": {
                                           "key": "manutd",
                                            "name": "Manchester United",
                                            "code": "MUN",
                                             "fouls":5,
                                         "cards":{
                                             "Yellow":3,
                                               "red":0
                                         }
                                            
                                                 },
                                          "score1": 0,
                                           "score2": 1
        }




             ]





   


}); //




