'use strict';

/**
 * @ngdoc service
 * @name mealsApp.menu
 * @description
 * # menu
 * Factory in the mealsApp.
 */
angular.module('mealsApp')
  .factory('menu', function () {

    var myRestaurant = [

      {
        "restname" : "St. Lukes",
        "foods": [
          {
            "foodname" : "Mothokoi",
            "price" : "250 "
          },
          {
            "foodname" : "Beef stew",
            "price" : "450 "
          },
          {
            "foodname" : "Githeri",
            "price" : "300 "
          }
        ]      
      },
      {
        "restname" : "Bettter Health",
        "foods": [
          {
            "foodname" : "Makaroni",
            "price" : "210 "
          },
          {
            "foodname" : "Pilau Masala",
            "price" : "150 "
          },
          {
            "foodname" : "Gluteal",
            "price" : "100 "
          }
        ]      
      },
      {
        "restname" : "Cool Stream",
        "foods": [
          {
            "foodname" : "Ugali Mboga",
            "price" : "150 "
          },
          {
            "foodname" : "Bhajia",
            "price" : "200 "
          },
          {
            "foodname" : "Chinese Sand",
            "price" : "420 "
          }
        ]      
      }, 
      {
        "restname" : "Wannah Restaurant",
        "foods": [
          {
            "foodname" : "Ugali Ya Wimbi",
            "price" : "100 "
          },
          {
            "foodname" : "Ethiopian Rise",
            "price" : "200 "
          },
          {
            "foodname" : "Sukuma wiki",
            "price" : "50 "
          }
        ]      
      }];

    return {
      myRestaurant : myRestaurant
    };
  });
