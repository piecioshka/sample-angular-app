define([
    'modules/simpleAngularApp'
], function (simpleAngularAppModule) {
    'use strict';

    /**
     * Master controller.
     *
     * @param {Object} $scope Angular.js model.
     * @constructor
     */
    function MainController($scope) {
        $scope.author = '@piecioshka';
    }

    MainController.$inject = ['$scope'];

    // Export to main module
    simpleAngularAppModule.controller('MainController', MainController);
});
