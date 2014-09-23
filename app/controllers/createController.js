angular.module('holiday')
	.controller('createController', function($scope, hotelsProvider, $location) {


		$scope.step = 1;

		$scope.incrementStep = function(){
			$scope.step++;
		}

		$scope.decrementStep = function(){
			$scope.step--;
		}

		$scope.AddHotel = function(h) {

			if (this.hotelsForm.$valid) {

				hotelsProvider.addHotel({
					name: h.name,
					location: h.location,
					price: h.price
				});

				$location.url('/listing');
			} else {
				alert('Error!');
			}
		}


	});