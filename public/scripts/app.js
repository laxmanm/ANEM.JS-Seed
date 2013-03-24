'use strict';

var publicApp = angular.module('publicApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
