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
		.run(function($rootScope, $state, $stateParams) {
		  	$rootScope.$state 		= $state;
		  	$rootScope.$stateParams = $stateParams;
		})

		// @ngInject
		.run(function($timeout) {
			$timeout(function () { 
            	$(document).foundation();
        	}, 300);
		})

		// @ngInject
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'views/home.html'
				})
				.state('grid', {
					url: '/grid',
					templateUrl: 'views/grid.html'
				})
				.state('table', {
					url: '/table',
					templateUrl: 'views/table.html'
				});
		});
})();