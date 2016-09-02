'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('HomeCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // var Firebase = require("firebase");

    var myFirebaseRef = new Firebase("https://orderapp-d2948.firebaseio.com/");

    $scope.SignIn = function($scope) {
        var username = $scope.user.email;
        var password = $scope.user.password;
     
     myFirebaseRef.createUser({
      email    : "atinababy24@gmail.com",
      password : "Dreamteam@14"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
    
    }; 
  });

    /*myFirebaseRef.createUser({
      email    : "atinababy24@gmail.com",
      password : "Dreamteam@14"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
    
  });*/
