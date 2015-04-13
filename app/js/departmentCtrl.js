fightingApp.controller('DepartmentCtrl', function ($scope,$routeParams,Fight) {

	$scope.list = Fight.courselistDD;
	
	$scope.test = Fight.departments.get({code:$routeParams.code});

});