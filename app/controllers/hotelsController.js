angular.module('holiday')
	.controller('hotelsController', function($scope, uiConfig, orderByElements, hotelsProvider, votingService, $location, $rootScope) {

		$scope.$emit('navbar', true);

		$scope.upVote = function(hotel) {
			votingService.upVote(hotel);
		}

		$scope.selectHotel = function(hotel){
			hotelsProvider.hotel = hotel;
			$location.url('/details')
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

		hotelsProvider.getHotels().then(function(hotels){
			$scope.hotels = hotels;
		});

	});