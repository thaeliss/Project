//Controller for courselist

fightingApp.controller('CourselistCtrl', function ($scope,$routeParams,Fight) {

	$scope.list = Fight.courselistDD;

});