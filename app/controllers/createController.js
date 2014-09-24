angular.module('holiday')
	.controller('createController', function($scope, hotelsProvider, $location) {


		$scope.hotel = {
			name: 'default',
			location: 'Bangalore',
			price: 10000,
			ameneties: [{
				name: 'Swimming Pool',
				available: true
			}]

		}

		$scope.states = [{
			name: 'Karnataka',
			id: "1"
		}, {
			name: 'Tamil Nadu',
			id: "2"
		}, {
			name: 'Kerala',
			id: "3"
		}];


		var cities = {
			"1": ['Bangalore', 'Mysore', 'Tumkur'],
			"2": ['Chennai'],
			"3": ['Cochin', 'Trissur']
		};

		$scope.selectedStateId = "2";


		$scope.availableCities = cities["3"];

		$scope.$watch('selectedStateId', function(newValue, oldValue) {
			$scope.availableCities = cities[newValue];

			//default city selection
			if(cities[newValue].length === 1){
				$scope.selectedCity = cities[newValue][0];
			}
		});


		$scope.removeAmenity = function(amenity) {

			var ameneties = $scope.hotel.ameneties;
			var index = ameneties.indexOf(amenity);
			ameneties.splice(index, 1);

		}

		$scope.addAmenity = function(newAmenity) {
			$scope.hotel.ameneties.push({
				name: newAmenity,
				available: true
			});

			$scope.newAmenity = '';
		}

		$scope.step = 1;

		$scope.incrementStep = function() {
			$scope.step++;
		}

		$scope.decrementStep = function() {
			$scope.step--;
		}

		$scope.availablePics = [
		'kVIGWsz.jpg', 'OqJMuy5.jpg', 'qA4PCDl.jpg'];

		$scope.AddHotel = function(h) {

			if (this.hotelsForm.$valid) {

				hotelsProvider.addHotel({
					name: h.name,
					location: h.location,
					price: h.price,
					description : h.description,
					ameneties : h.ameneties
				});

				$location.url('/listing');
			} else {
				alert('Error!');
			}
		}


	});