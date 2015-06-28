require.config({
    paths: {
        angular: 'vendor/angular/angular'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require([
    'core/controller/MainController'
], function () {
    console.log('Done');
});
