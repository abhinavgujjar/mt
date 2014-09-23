angular.module('holiday')
	.factory('hotelsProvider', function($http) {


		return {
			getHotels: function(callback) {
				$http.get('data/hotels.json').success(function(data){
					callback(data);
				})

			},
			addHotel : function	(hotel){
				hotels.push(hotel);
			},
			getHotel : function(hotelId){
				var target;

				angular.forEach(hotels, function(item){
					if (item.id === hotelId){
						target = item;
					}
				});

				return target;

			}
		}

	});