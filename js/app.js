angular.module('app',['ngRoute', 'ngAnimate']).config(['$routeProvider',
	function( $routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		}).
		when('/:id', {
			templateUrl: 'partials/details.html',
			controller: 'DetailsCtrl'
		}).
		otherwise({
			redirectTo: '/index.html'
		});
	}
]);