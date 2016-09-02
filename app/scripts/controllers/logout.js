'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('LogoutCtrl', function ($scope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $location.path('/');
   // $window.location = '/';

    $scope.logout = function () {
                
               $window.location = '/';
                
            };
  });
