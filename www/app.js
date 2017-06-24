

var app = angular.module('app', []);


app.controller('LoginController', function($scope, $http, $templateCache) {
	$scope.username = "";
	$scope.password = "";

	$scope.login = function() {
		console.log($scope.username);
		var auth = window.btoa($scope.username + ":" + $scope.password);
		var headers = {"Authorization": "Basic " + auth};
		
		$http({
			url: "http://127.0.0.1:8000/api/v1/login/",
			method: 'POST',
			headers: headers,
			cache: $templateCache,
			data: {
				username: $scope.username
			}
		}).then(function(response) {
			console.log(response.data);
		}, function(response) {
			console.log("Yummm");
		});
	}

});