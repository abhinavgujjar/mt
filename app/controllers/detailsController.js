angular.module('holiday')
	.controller('detailsController', function($scope, hotelsProvider, $routeParams) {

		var hotel = hotelsProvider.hotel;

		if (!hotel) {
			var hotelId = $routeParams.hotelId;

			hotelsProvider.getHotel(hotelId).then(function(target){
				$scope.hotel = target;
			});

		}

		$scope.hotel = hotel;

	});