(function () {

	'use strict';
	
	/**
	 * @description		Configures the default URL route. 
	 * 					All routes are configured in feature-level module.js files.
	 * @ngInject
	 */
	function configureApp($urlRouterProvider) {
		$urlRouterProvider.otherwise('/default');
	}

	angular.module('templates', []);	// from gulp-angular-templatecache
	angular.module('app', ['ui.router', 'templates'])
		.config(configureApp);

})();