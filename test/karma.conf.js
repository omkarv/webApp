// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-06-11 using
// generator-karma 0.8.1

module.exports = function(config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        '../app/bower_components/angular/angular.min.js',
        '../app/bower_components/angular-cookies/angular-cookies.min.js',
        '../app/bower_components/angular-mocks/angular-mocks.js',
        '../app/bower_components/angular-resource/angular-resource.min.js',
        '../app/bower_components/angular-route/angular-route.min.js',
        '../app/bower_components/angular-sanitize/angular-sanitize.min.js',
        // '../app/bower_components/angular-scenario/angular-scenario.js',
        // '../app/bower_components/d3/d3.min.js',
        '../app/modules/**/*.js',
        'karma_test.js',
        'client/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome',
      // 'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-chrome-launcher',
      // 'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
