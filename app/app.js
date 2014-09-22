function greetingController($scope, $timeout) {

	var greetings = ['Morning', 'Afternon', 'Evening'];

	$scope.message = "Good " + greetings[0];

	$scope.companyName = "MindTree";

	$scope.showMessage = true;

	$timeout(function(){
		$scope.message = "Lunch Time!!!!"
	}, 3000);

}

function hotelsController($scope) {


	$scope.hotels = [{
			name: 'Taj Vivanta',
			location: 'Yeshwantpur',
			price: 7000
		},{
			name: 'Leela Palace',
			location: 'Old Airport Road',
			price: 30000
		},{
			name: 'Ashoka',
			location: 'Indirangar',
			price: 20000
		},{
			name: 'Alila',
			location: 'Whitefield',
			price: 22000
		}]
}
