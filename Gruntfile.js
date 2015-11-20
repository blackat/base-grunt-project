'use strict';

// wrapper function
module.exports = function (grunt) {

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        protractor: 'grunt-protractor-runner'
    });

    // Time how long a task take
    require('time-grunt');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // inject bower dependencies
        wiredep: {
            target: {
                src: 'client/index.html'
            }
        },

        express: {
            options: {
                port: process.env.PORT || 8000
            },
            dev: {
                options: {
                    script: 'server/server.js',
                    debug: true
                }
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
        },

        protractor: {
            options: {
                configFile: 'protractor.conf.js',
                keepAlive: true
            },
            chrome: {
                options: {
                    args: {
                        browser: 'chrome'
                    }
                }
            }
        },

        protractor_webdriver: {
            start: {
                options: {
                    path: 'node_modules/protractor/bin/',
                    command: 'webdriver-manager start'
                }
            }
        }
    });

    // Used for delaying livereload until after server has restarted
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });

    grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
        this.async();
    });

    grunt.registerTask('unit-dev', [
        'karma:dev'
    ]);

    grunt.registerTask('unit-cont', [
        'karma:continuous'
    ]);

    grunt.registerTask('serve', [
        'wiredep',
        'express:dev',
        'wait',
        'express-keepalive'
    ]);

    grunt.registerTask('e2e', [
        'wiredep',
        'express:dev',
        'protractor_webdriver',
        'protractor:chrome'
    ]);
};