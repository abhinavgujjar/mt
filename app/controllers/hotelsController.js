angular.module('holiday')
	.controller('hotelsController', function($scope, uiConfig, orderByElements, hotelsProvider, votingService) {

		$scope.upVote = function(hotel) {
			votingService.upVote(hotel);
		}


		$scope.descLimit = uiConfig.descLimit;
		$scope.maxHotels = uiConfig.maxHotels;

		$scope.orderByElements = orderByElements;

		$scope.downVote = function(hotel) {
			votingService.downVote(hotel);
		}

		
		$scope.showHotel = function(hotel) {
			alert(hotel.name);
		}

		$scope.hotels = hotelsProvider.getHotels();

	});