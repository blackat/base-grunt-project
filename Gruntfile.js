'use strict';

// wrapper function
module.exports = function (grunt) {

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {});

    // Time how long a task take
    require('time-grunt');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // inject bower dependencies
        wiredep: {
            target: {
                src: 'client/app/index.html'
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js',
                reporters: ['progress', 'coverage'],
                logLevel: 'INFO',
                coverageReporter: {
                    type: 'html',
                    dir: 'coverage/'
                }
            },
            continuous: {
                singleRun: true,
                logLevel: 'DEBUG'
            },
            dev: {
                singleRun: false
            }
        }
    });

};