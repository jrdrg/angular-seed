# angular-seed
This is an Angular.js seed project that sets up my preferred file structure, 
stores all views in the template cache, compiles LESS files, and concatenates/minifies all application 
files into a build directory.

I just wanted a basic seed template application which uses ui-router instead of ngRoute, gulp instead of grunt, and
allows splitting up of route definitions into separate files, so I created this one based on a number of applications
I've developed.

##Features:
* UI-Router configurations set up in **/module.js files
* Includes bootstrap less files and compiles everything to one css file
* Uses gulp to build everything, includes gulp-webserver to run application locally
* Uses gulp-angular-templatecache to load all views into the angular template cache
* Runs all application .js files through jshint to check for errors

##Installation
Clone the repo, then
``` 
npm install
bower install
gulp webserver
```
