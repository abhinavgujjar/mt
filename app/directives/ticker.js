angular.module('holiday').directive('ticker', function($interval) {

	//directive definition object
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="label label-primary">ticker</div>',
		link: function(scope, element, attrs, ctrl) {
			var ticks = 0;

			$interval(function() {
				ticks++;
				element.html('<h2><div class="label label-primary">' + ticks + '</div></h2>')
			}, 500);

		}
	}
});

angular.module('holiday').directive('strange', function($interval) {

	//directive definition object
	return {
		restrict: 'A',
		link: function(scope, element, attrs, ctrl) {

			element.on('mouseenter', function(e) {
				if (element.val() > 2000) {
					element.css({
						color: "red"
					});
				} else {
					element.css({
						color: "blue"
					});
				}
			})
		}
	}
});


angular.module('holiday').directive('onlyEven', function($interval) {

	//directive definition object
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {

			ctrl.$parsers.unshift(checkForEven);

			function checkForEven(viewValue) {
				if (parseInt(viewValue) % 2 === 0) {
					ctrl.$setValidity('evenNumber', true);
				} else {
					ctrl.$setValidity('evenNumber', false);
				}
				return viewValue;
			}


		}
	}
});