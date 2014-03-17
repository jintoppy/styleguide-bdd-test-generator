/*
 * styleguide-bdd-test-generator
 * 
 *
 * Copyright (c) 2014 Jinto Jose
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    styleguide_bdd_test_generator: {
      default_options: {
        options: {
        },
        files: {
          'tmp': ['test/fixtures']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!',
          beforeEachFn: function(){
            ptor = protractor.getInstance();
          },
          globalVars: 'ptor'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'styleguide_bdd_test_generator', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
