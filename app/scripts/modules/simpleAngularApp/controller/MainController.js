define(function (require) {
    'use strict';

    var simpleAngularAppModule = require('../module');

    /**
     * Master controller.
     *
     * @param {Object} $scope Angular.js model.
     * @constructor
     */
    function MainController($scope) {
        $scope.projectTitle = 'Simple Angular.js app';
    }

    MainController.$inject = ['$scope'];

    // Export to main module
    simpleAngularAppModule.controller('MainController', MainController);
});
