
fightingApp.controller('StartCtrl', function ($scope,Fight) {

	$scope.departments = Fight.departments;
	console.log($scope.departments);

});