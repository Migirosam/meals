'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('OrdersCtrl', function ($scope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // var orderedfood = JSON.parse($window.localStorage.getItem("orderedfoods"));
    // console.log(orderedfood);
    

    $scope.del = false;
    $scope.orderedfood = JSON.parse($window.localStorage.getItem("orderedfoods"));

    // del represents delivered foods
    $scope.order = function()
    {
      $scope.del= false;
    };

    $scope.deliver = function() {
      $scope.del = true;
    };

    // Displaying delivered food to delivery button
    $scope.changeDelivered = function(key, meals) {
      console.log(key);

      meals = {
          foodname : meals.foodname,
          price : meals.price,
          orderedfood : true,
          deliveredfood : true
        };
        // $scope.orderedfood[key];
        $scope.orderedfood[key] = meals;

        $window.localStorage.setItem("orderedfoods", JSON.stringify($scope.orderedfood));

    };
    
    
  });
