angular.module('holiday')
	.controller('createController', function($scope, hotelsProvider) {

		$scope.AddHotel = function(h) {
			hotelsProvider.addHotel({
				name: h.name,
				location: h.location,
				price: h.price
			});
		}


	});