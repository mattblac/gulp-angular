(function() {
	'use strict';

	angular
		.module('app')
		.controller('HeaderNavCtrl', controller);

	// @ngInject
	function controller() {
		var header = this;

		// Models
		header.links = [{name: 'home'}, {name: 'grid'}, {name: 'table'}];
	}
})();