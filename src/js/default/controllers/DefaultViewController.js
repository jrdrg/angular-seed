(function() {
	
	'use strict';
	
	/**
	 * @ngInject
	 */
	function DefaultViewController() {
		var self = this;
		
		this.changeMessage = changeMessage;
		this.message = 'This is the controller for the default view.';
		
		
		function changeMessage() {
			self.message = 'Changed the message';
		}
	}
	
	angular.module('app')
		.controller('DefaultViewController', DefaultViewController);
	
})();