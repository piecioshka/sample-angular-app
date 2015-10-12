require.config({
    paths: {
        domReady: 'vendor/require/domReady',
        angular: 'vendor/angular/angular',
        uiRouter: 'vendor/angular/angular-ui-router'
    },

    shim: {
        angular: {
            exports: 'angular'
        },

        uiRouter: {
            deps: ['angular']
        }
    },

    deps: [
        './bootstrap'
    ]
});
