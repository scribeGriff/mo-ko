/*jshint node:true*/

exports.config = {
  "modules": [
    "copy",
    "bower"
  ],
  watch: {
    sourceDir: "../src",
    compiledDir: "../dist",
    javascriptDir: "app"
  },
  bower: {
    copy: {
      strategy: "together",
      togetherRoot: "../test/bower_modules",
      mainOverrides: {
        "jasmine": [
          "lib/jasmine-core.js", 
          "lib/jasmine-core/jasmine.css", 
          "lib/jasmine-core/jasmine.js",, 
          "lib/jasmine-core/jasmine-html.js",, 
          "lib/jasmine-core/boot.js",
          "lib/console/console.js"
        ]
      }
    }
  }
};