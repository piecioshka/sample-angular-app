require.config({
    paths: {
        angular: 'vendor/angular/angular'
    },

    shim: {
        angular: {
            exports: 'angular'
        }
    },

    deps: ['app']
});
