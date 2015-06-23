(function() {
	'use strict';

	angular
		.module('app')
		.directive('uiHeaderNav', directive);

	// @ngInject
	function directive() {
		return {
			restrict: 'A',
			templateUrl: 'components/headerNav/headerNav.html'
		};
	}
})();