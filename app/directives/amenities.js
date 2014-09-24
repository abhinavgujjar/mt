

angular.module('holiday').directive('amenities', function(){
    
    //directive definition object
    return {
        restrict : 'E',
        templateUrl : 'partials/amenities.html',
        scope : {
        	list : '=list',
        	disp : '@disp'
        },
        controller : function($scope){
        	$scope.removeAmenity = function(amenity) {

			var ameneties = $scope.list;
			var index = ameneties.indexOf(amenity);
			ameneties.splice(index, 1);

		}

		$scope.addAmenity = function(newAmenity) {
			$scope.list.push({
				name: newAmenity,
				available: true
			});

			$scope.newAmenity = '';
		}

        }
    }
});