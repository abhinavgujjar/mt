angular.module('holiday')
.controller('hotelsController', function($scope, uiConfig, orderByElements, hotelsProvider) {

		$scope.upVote = function(ht) {

			if (!ht.rating) {
				ht.rating = 0;
			}

			ht.rating++;
		}

		$scope.descLimit = uiConfig.descLimit;
		$scope.maxHotels = uiConfig.maxHotels;

		$scope.orderByElements = orderByElements;

		$scope.downVote = function(ht) {

			if (!ht.rating) {
				ht.rating = 0;
			}

			ht.rating--;
		}

		$scope.AddHotel = function(h) {
			$scope.hotels.push({
				name: h.name,
				location: h.location,
				price: h.price
			});
		}

		$scope.showHotel = function(hotel) {
			alert(hotel.name);
		}

		$scope.hotels = hotelsProvider.getHotels();

	});