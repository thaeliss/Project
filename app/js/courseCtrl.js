fightingApp.controller('CourseCtrl', function ($scope,$routeParams,Fight) {

//	$scope.course=Fight.courselist.get({id:$routeParams});

	$scope.list = Fight.courselist;
	
	console.log($scope.list);

});