(function() {
	'use strict';

	angular
		.module('app', ['ui.router'])
		.constant('config', {
			appName		: 'Gulp-Angular',
			appVersion	: '0.0.1',
			apiUrl		: 'api/v/1'
		})

		// @ngInject
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'components/home.html'
				});
		});
})();