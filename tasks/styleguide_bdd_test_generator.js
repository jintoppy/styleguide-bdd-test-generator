/*
 * styleguide-bdd-test-generator
 * 
 *
 * Copyright (c) 2014 Jinto Jose
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
    _ = require('underscore');


module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var getShouldStatements = function(styleGuide,selector){
    var shouldStr = "";
    _.each(styleGuide, function(value, key){
        shouldStr += "\t\tit(\"should have " + key + " of " + value+ "\", function(){\n";
          shouldStr += "\t\t\texpect(ptor.findElement(protractor.By.css('"+selector+"')).css_value('"+key+"')).toEqual('"+value+"')\n";
        shouldStr += "\t\t});\n\n";
    });
    return shouldStr;
  };

  var processJSON = function(filecontent, outputDir, options){
      console.log(filecontent);
      console.log(outputDir);

      var filePath = path.join(outputDir, filecontent.modulename + '.js');

      var testString = "describe('"+ filecontent.modulename+" element styles', function() {\n";

        testString += "\t var " + options.globalVars+ ";\n\n";
        testString += "\t beforeEach("+ options.beforeEachFn.toString() +");\n\n";

      var totalElements = filecontent.elements;

      for(var i=0;i<totalElements.length;i++){
          testString += "\tdescribe('"+ totalElements[i].name+"', function() {\n";

          testString += getShouldStatements(totalElements[i].styles, totalElements[i].selector);

          testString += "\t});\n\n";
      }

      testString += "});";

      grunt.file.write(filePath, testString);
      //filecontent.element

  };


  grunt.registerMultiTask('styleguide_bdd_test_generator', 'A BDD style test file generator based on the style guide', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', ',
      beforeEachFn: function(){
        ptor = protractor.getInstance();
      },
      globalVars: 'ptor'
    });

    // Iterate over all specified file groups.
   this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (dirpath) {
        // Warn on and remove invalid source files (if nonull was set).
        if(!grunt.file.isDir(dirpath)){
          grunt.log.warn('Source "' + dirpath + '"is not a directory');
          return false;
        }
        else{
          return true;
        }

      });

      src.forEach(function(dirpath){
          var files = grunt.file.expand({cwd:dirpath},'*');
          files.forEach(function(filepath){
            var filecontent = grunt.file.readJSON(dirpath+'/'+filepath);
            processJSON(filecontent, file.dest, options);
          });
      });

      // .map(function (dirpath) {
      //   // Read file source.
      //   return grunt.file.expand({cwd:dirpath},'*').map(function(filepath){
      //       grunt.log.writeln(dirpath+'/'+filepath);
      //       var filecontent = grunt.file.readJSON(dirpath+'/'+filepath);
      //       return filecontent.elements.length;
      //   }).join(grunt.util.linefeed);
      // }).join(grunt.util.linefeed);

      // Handle options.
      src += options.punctuation;

      grunt.log.writeln(src);
      // Write the destination file.
      //grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
