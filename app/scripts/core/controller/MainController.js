define([
    'angular'
], function (angular) {
    'use strict';

    function MainController($scope) {
        $scope.foo = 'bar';
    }

    angular.module('app', [])
        .controller('MainController', ['$scope', MainController]);
});
