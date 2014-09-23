(function () {
	var votingServiceConstructor = function(uiConfig) {

		function up(ht) {

			if (!ht.rating) {
				ht.rating = 0;
			}

			ht.rating = ht.rating + uiConfig.changeBy;
		}

		function down(ht) {

			if (!ht.rating) {
				ht.rating = 0;
			}

			if (ht.rating > 0) {

				ht.rating = ht.rating - uiConfig.changeBy;
			}

		}

		return {
			upVote: up,
			downVote: down
		}

	}

	angular.module('holiday')
		.factory('votingService', votingServiceConstructor);
})();