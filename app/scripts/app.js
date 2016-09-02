'use strict';

/**
 * @ngdoc overview
 * @name mealsApp
 * @description
 * # mealsApp
 *
 * Main module of the application.
 */
angular
  .module('mealsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        // controllerAs: 'home'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        // controllerAs: 'register'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        // controllerAs: 'menu'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        // controllerAs: 'orders'
      }).when('/', {
        templateUrl : 'views/home.html',
        controller : 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
