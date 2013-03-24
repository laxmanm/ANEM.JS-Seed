'use strict';

publicApp.controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Testacular'
    ];

    $http.get('/api/withdb/name/1').success(function(data, status, headers, config) {
        $scope.withdb = data;
    });


    $http.get('/api/withoutdb/NodeJS.AngularJS').success(function(data, status, headers, config) {
        $scope.withoutdb = data;
    });
});
