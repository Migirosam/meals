'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('MenuCtrl', function ($scope, menu, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $scope.foods;
    
    // reading data from localstorage
    var orderedfood = JSON.parse($window.localStorage.getItem("orderedfoods"))||[];
    console.log(orderedfood);
    // orderedfood = orderedfood || [];
 
    // Defining restaurant and ordered food
    $scope.myRestaurant = menu.myRestaurant;
    $scope.orderfood = function(key,Cafeteria){
      // console.log(key);

      // Defining foods in a restaurants 
      $scope.foods = Cafeteria.foods;
      // console.log(Cafeteria.foods);
      
      // Getting foods to local storage
      $scope.storage = function (food){

        orderedfood.push({
          foodname : food.foodname,
          price : food.price,
          orderedfood : true,
          deliveredfood : false
        });

        // Sending data to localstorage
        $window.localStorage.setItem("orderedfoods", JSON.stringify(orderedfood));
      };
      /*$scope.order = function(){
        //$window.alert("You selected" + foodname);
      };*/
    
    };
    
  });
