'use strict';

// wrapper function
module.exports = function (grunt) {

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {});

    // Time how logn a task take
    require('time-grunt');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        wiredep: {
            target: {
                src: 'client/index.html'
            }
        }
    });

};