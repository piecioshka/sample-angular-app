define(function (require) {
    'use strict';

    var ng = require('angular');

    require('uiRouter');

    var simpleAngularApp = ng.module('simpleAngularApp', [
        'ui.router'
    ]);

    simpleAngularApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './scripts/modules/simpleAngularApp/views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: './scripts/modules/simpleAngularApp/views/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './scripts/modules/simpleAngularApp/views/contact.html'
            });

        $urlRouterProvider.otherwise('home');
    });

    return simpleAngularApp;
});
