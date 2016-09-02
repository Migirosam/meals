'use strict';

/**
 * @ngdoc service
 * @name mealsApp.orders
 * @description
 * # orders
 * Factory in the mealsApp.
 */
angular.module('mealsApp')
  .factory('orders', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
