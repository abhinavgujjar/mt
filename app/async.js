// Code goes here

function mainController($q) {

	function getCountry() {
		var deferred = $q.defer();

		setTimeout(function() {
			deferred.resolve('india');
		}, 500);

		return deferred.promise;
	}


	function getCapital(country) {
		var deferred = $q.defer();

		setTimeout(function() {
			if (country === 'india') {
				deferred.resolve('new delhi');
			} else {
				deferred.reject('counry not found');
			}
		}, 500);

		return deferred.promise;
	}

	function getArea(city) {
		var deferred = $q.defer();

		setTimeout(function() {
			if (city === 'new delhi') {
				deferred.resolve(60000);
			} else {

			}
		}, 500);

		return deferred.promise;
	}

	function getPopulation(city) {
		var deferred = $q.defer();

		setTimeout(function() {
			if (city === 'new delhi') {
				deferred.resolve(556644);
			} else {

			}
		}, 1500);

		return deferred.promise;
	}

	//then(success, error)

	getCountry().then(function(country) {
		console.log(country);

		return getCapital(country);

	}).then(function(capital) {
		console.log(capital);

		var p1 = getArea(capital);
		var p2 = getPopulation(capital);

		return $q.all({
			area : p1,
			pop : p2
		});

	}).then(function(result) {

		console.log(result.area);
		console.log(result.pop);

	}, function(error) {
		alert(error);
	})
}