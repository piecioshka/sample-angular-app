define(function (require) {
    'use strict';

    var ng = require('angular');

    require('modules/simpleAngularApp/index');

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['simpleAngularApp']);
    });
});
