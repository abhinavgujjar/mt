angular.module('holiday')
	.factory('hotelsProvider', function($http, $q) {


		return {
			getHotels: function() {
				var deferred = $q.defer();

				$http.get('https://api.parse.com/1/classes/Hotel', {
					headers: {
						'X-Parse-Application-Id': '',
						'X-Parse-REST-API-Key': '',
					}
				}).success(function(data) {
					deferred.resolve(data.results);
				});

				return deferred.promise;

			},
			addHotel: function(hotel) {

				$http.post('https://api.parse.com/1/classes/Hotel', hotel, {
					headers: {
						'X-Parse-Application-Id': '',
						'X-Parse-REST-API-Key': '',
					}
				})

			},
			getHotel: function(hotelId) {
				var target;

				angular.forEach(hotels, function(item) {
					if (item.id === hotelId) {
						target = item;
					}
				});

				return target;

			}
		}

	});