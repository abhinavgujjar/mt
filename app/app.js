angular.module('holiday', ['ngRoute', 'ngSanitize']);


angular.module('holiday').config(
	function($routeProvider) {

		$routeProvider.when('/listing', {
			templateUrl : 'partials/listing.html',
			controller : 'hotelsController'
		});

		$routeProvider.when('/home', {
			templateUrl : 'partials/home.html'
		});

		$routeProvider.when('/create', {
			templateUrl : 'partials/create.html',
			controller : 'createController'
		});

		$routeProvider.when('/details', {
			templateUrl : 'partials/details.html',
			controller : 'detailsController'
		});

		$routeProvider.when('/grid', {
			templateUrl : 'partials/grid.html',
			controller : 'hotelsController'
		});

		$routeProvider.otherwise( {
			redirectTo: '/home'
		});
		
	}
);

angular.module('holiday')
	.value('orderByElements', [
		'price',
		'name',
		'rating'
	])


angular.module('holiday').controller('mainController', function($scope){
	$scope.hideNavBar = false;

	$scope.$on('navbar', function(event, args){
		if (args){
			$scope.hideNavBar = false;			
		}
		else
		{
			$scope.hideNavBar = true;
		}
	})
})


	