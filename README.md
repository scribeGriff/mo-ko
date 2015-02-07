mo-ko: A Mimosa Skeleton for Knockout.js
======

## Overview

This Mimosa skeleton reproduces the same starting point directory and file structure that is provided by the Knockout Yeoman generator [generator-ko](https://github.com/SteveSanderson/generator-ko) by Steve Sanderson.

## Getting Started

1. You need to have [node.js](http://nodejs.org/) and [Mimosa](http://mimosa.io/) installed.
2. Clone this repo.
3. `cd` to the repo root directory.
4. `npm install` - installs gulp and karma developer dependencies.
5. `mimosa bower` - scaffolds the project.
6. Migrate to `index.html` in the src directory and serve.
7. `gulp` - concatenates, minifies and builds.

## Requirements

1. `mimosa-bower` > 1.8.1.  Mimosa currently ships with 1.6.2.
2. Gulp uses the dist directory for building.  If you are going to use Mimosa for building, you will need to change the `compiledDir` value in both `mimosa-config.js` files (in root and in test).

## Server, Live Reload and Linting

Some possible implementations include:

1. I use [Brackets](http://brackets.io/) for editing, linting, serving and live-reload.  If you use Brackets, then you can use this skeleton as is.  
2. You can easily add server, live reload and linting with [Mimosa](http://mimosa.io/started.html) or [Gulp](https://www.npmjs.com/package/gulp-webserver). 
3. Use a simple server solution such as [static-server](https://www.npmjs.com/package/static-server):  `npm install static-server`, then from the root directory, `static-server src`.

## Testing

The `test` directory has its own `mimosa-config.js`.  To setup your testing environment:

1. `cd` to test directory in root
2. `mimosa bower`

That's it.