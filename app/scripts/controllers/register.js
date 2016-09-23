'use strict';

/**
 * @ngdoc function
 * @name mealsApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the mealsApp
 */
angular.module('mealsApp')
  .controller('RegisterCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase(FIREBASE_URL);
    var q = ref.child('profile').orderByChild('username').equalTo($scope.user.username);
    q.once('value', function(snapshot) {
        if (snapshot.val() === null) {
            Auth.register($scope.user).then(function(user) {
                return Auth.login($scope.user).then(function() {
                    user.username = $scope.user.username;
                    return Auth.createProfile(user);
                }).then(function() {
                    $location.path('/');
                });
            }, function(error) {
                $scope.error = error.toString();
            });
        } else {
            // username already exists, ask user for a different name
        }
    });
  });
