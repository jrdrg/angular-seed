var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');


var dirs = {
	out: 'build/',
	vendor: 'build/vendor'
};

/* Define various paths */
var paths = {
	app: {
		js: {
			files: ['src/js/app.js', 'src/js/**/module.js', 'src/js/**/*.js'],
			out: 'application.js'
		},
		less: {
			files: ['src/less/custom_bootstrap/custom_bootstrap.less', 'src/less/*.less'],
			out: 'app.css'
		},
		templates: {
			files: ['src/views/**/*.html', 'src/js/**/views/*.html']
		}
	},
	vendor: {
		js: {
			files: [
				'bower_components/jquery/dist/jquery.min.+(js|map)',
				'bower_components/angular/angular.min.js*(.map)',
				'bower_components/angular-ui-router/release/angular-ui-router.min.+(js|map)',
				'bower_components/bootstrap/dist/js/bootstrap.min.+(js|map)'
			],
			out: 'vendor-scripts.js'
		}
	}
};


/**
 * Puts all html views into the angular template cache
 */
gulp.task('template-cache',
	function () {
		return gulp.src(paths.app.templates.files)
			.pipe(templateCache())
			.pipe(gulp.dest(dirs.out));
	});
	

/**
 * Copies vendor scripts to build/vendor directory
 */
gulp.task('vendor-scripts',
	function () {
		return gulp.src(paths.vendor.js.files)
			.pipe(gulp.dest(dirs.vendor));
	});


/**
 * Compiles LESS files to CSS.
 * Custom bootstrap file is compiled first and then any app LESS files afterward.
 */
gulp.task('compile-less',
	function () {
		return gulp.src(paths.app.less.files)
			.pipe(less())
			.pipe(concat(paths.app.less.out))
			.pipe(gulp.dest(dirs.out));
	});


/**
 * Run jshint on all .js files to check for code issues
 */
gulp.task('jshint',
	function() {
		return gulp.src(paths.app.js.files)
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	});


gulp.task('scripts',
	['jshint', 'template-cache'],
	function () {
		return gulp.src(paths.app.js.files)
			.pipe(sourcemaps.init())
			.pipe(ngAnnotate())
			.pipe(uglify())
			.pipe(concat(paths.app.js.out))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(dirs.out));
	});
	
	
/**
 * Default task, builds everything
 */
gulp.task('default', ['scripts', 'vendor-scripts', 'compile-less']);


/**
 * Run a local webserver for development/testing
 */
gulp.task('webserver',
	function () {
		return gulp.src('.')
			.pipe(webserver({
			host: 'localhost',
			port: 8000,
			open: true
		}));
	});