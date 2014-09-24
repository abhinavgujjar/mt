angular.module('holiday')
	.factory('hotelsProvider', function($http, $q) {


		return {
			getHotels: function() {
				var deferred = $q.defer();

				$http.get('https://api.parse.com/1/classes/Hotel', {
					headers: {
						'X-Parse-Application-Id': 'l5K55fjSlLtpQoV5p3zyZJuD7s5i0ES4tKPSENoS',
						'X-Parse-REST-API-Key': 'gj4B7xfvL2d78VaXL4x5fXzy4cjKO60PEPcTgxhc',
					}
				}).success(function(data) {
					deferred.resolve(data.results);
				});

				return deferred.promise;

			},
			addHotel: function(hotel) {

				$http.post('https://api.parse.com/1/classes/Hotel', hotel, {
					headers: {
						'X-Parse-Application-Id': 'l5K55fjSlLtpQoV5p3zyZJuD7s5i0ES4tKPSENoS',
						'X-Parse-REST-API-Key': 'gj4B7xfvL2d78VaXL4x5fXzy4cjKO60PEPcTgxhc',
					}
				})

			},
			getHotel: function(hotelId) {

				var deferred = $q.defer();

				$http.get('https://api.parse.com/1/classes/Hotel/' + hotelId , {
					headers: {
						'X-Parse-Application-Id': 'l5K55fjSlLtpQoV5p3zyZJuD7s5i0ES4tKPSENoS',
						'X-Parse-REST-API-Key': 'gj4B7xfvL2d78VaXL4x5fXzy4cjKO60PEPcTgxhc',
					}
				}).success(function(data) {
					deferred.resolve(data);
				});

				return deferred.promise;
			}
		}

	});