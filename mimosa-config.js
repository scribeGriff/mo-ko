/*jshint node:true*/

exports.config = {
  "modules": [
    "copy",
    "bower"
  ],
  watch: {
    sourceDir: "src",
    compiledDir: "dist",
    javascriptDir: "app"
  },
  bower: {
    copy: {
      strategy: "together",
      togetherRoot: "bower_modules",
      mainOverrides: {
        "components-bootstrap": ["js/bootstrap.min.js", "css/bootstrap.min.css", "css/bootstrap.css.map"],
        "crossroads": ["dist/crossroads.min.js"],
        "hasher": ["dist/js/hasher.min.js"],
        "requirejs-text": ["text.js"],
        "js-signals": ["dist/signals.min.js"],
        "jquery": ["dist/jquery.js"],
        "knockout": ["dist/knockout.js", "dist/knockout.debug.js"],
        "knockout-projections": ["dist/knockout-projections.js", "dist/knockout-projections.min.js"]
      }
    }
  }
};