//Controller for Course-page

//Will use $routeParams to find the right course in courselist and save it

fightingApp.controller('CourseCtrl', function ($scope,$routeParams,Fight) {

	$scope.course = Fight.course;

});