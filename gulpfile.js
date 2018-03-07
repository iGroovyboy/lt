'use strict';

var gulp            = require('gulp'),
    browserSync     = require("browser-sync"),
    reload          = browserSync.reload,
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins         = gulpLoadPlugins();

var config = {
    proxy: "domain.loc",
    tunnel: true, //or unique localtunnel subdomain option
    reloadOnRestart: false,
    notify: false,
    host: 'localhost',
    port: 3000,
    logPrefix: "Groovyboy"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['webserver']);