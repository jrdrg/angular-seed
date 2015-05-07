(function() {
	
	'use strict';
	
	/**
	 * @ngInject
	 */
	function configureModule($stateProvider) {
		$stateProvider
			.state('default', {
				url: '/default',
				templateUrl: 'default/views/test.html',
				controller: 'DefaultViewController',
				controllerAs: 'vm'
			});
	}
	
	angular.module('app')
		.config(configureModule);
})();