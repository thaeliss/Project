//controller for start-page, gets the departments from model
fightingApp.controller('StartCtrl', function ($scope,Fight) {

	$scope.departments = Fight.departments;
	console.log($scope.departments);

});