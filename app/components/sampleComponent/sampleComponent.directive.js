(function() {
	'use strict';

	angular
		.module('app')
		.directive('sampleComponent', directive);

	// @ngInject
	function directive() {
		return {
			restrict: 'A',
			templateUrl: 'components/sampleComponent/sampleComponent.html'
		};
	}
})();