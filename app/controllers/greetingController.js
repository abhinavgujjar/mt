angular.module('holiday')
	.controller('greetingController', function($scope, $timeout) {

		var greetings = ['Morning', 'Afternon', 'Evening'];

		$scope.message = "Good " + greetings[0];

		$scope.companyName = "MindTree";

		$scope.showMessage = true;

		$timeout(function() {
			$scope.message = "Lunch Time!!!!"
		}, 3000);

	})
