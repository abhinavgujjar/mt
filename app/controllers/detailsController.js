angular.module('holiday')
	.controller('detailsController', function($scope, hotelsProvider, $routeParams) {

		var hotel = hotelsProvider.hotel;

		if (!hotel) {
			var hotelId = $routeParams.hotelId;

			hotel = hotelsProvider.getHotel(hotelId);

		}


		$scope.hotel = hotel;

	});