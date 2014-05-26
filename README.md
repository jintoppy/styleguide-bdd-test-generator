# styleguide-bdd-test-generator

> A BDD style test file generator based on the style guide

## Getting Started
This grunt plugin is used to generate bdd style test files automatically from the style objects

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install styleguide-bdd-test-generator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('styleguide-bdd-test-generator');
```

## The "styleguide_bdd_test_generator" task

### Overview
In your project's Gruntfile, add a section named `styleguide_bdd_test_generator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  styleguide_bdd_test_generator: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options



### Usage Examples

#### Default Options

here in the testing file, add every styles you want for element as a key value pair

```js
grunt.initConfig({
  styleguide_bdd_test_generator: {
    options: {},
    files: {
      'dest': ['src/testing', 'src/testing1'],
    },
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Jinto Jose. Licensed under the MIT license.
