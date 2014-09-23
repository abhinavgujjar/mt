angular.module('holiday', ['ngRoute']);


angular.module('holiday').config(
	function($routeProvider) {
		
		$routeProvider.when('/listing', {
			templateUrl : 'partials/listing.html'
		});

		$routeProvider.when('/create', {
			template : '<h1>create</h1><div>Newhotel</div>'
		});
		
	}
);

angular.module('holiday')
	.value('orderByElements', [
		'price',
		'name',
		'rating'
	])


	