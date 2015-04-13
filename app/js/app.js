var fightingApp = angular.module('fighting', ['ngRoute','ngResource','ngCookies']);

// In some cases we want the path to be variable (e.g. contain the course or department code). To define the variable part of 
// the path we use the ":" sign. For instance, our '/course/:code' will be triggered when we access 
// 'http://localhost:8000/#/course/2D5346'. The 2D5346 value will be stored in a code parameter, which we can
// then access through $routeParams service.

fightingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/start', {
        templateUrl: 'partials/start.html',
        controller: 'StartCtrl'
      }).
/*      when('/courselist/', {
        templateUrl: 'partials/courselist.html',
        controller: 'CourselistCtrl'
      }).	*/
      when('/course/:code', {	// 'code' here is the course code
        templateUrl: 'partials/course.html',
        controller: 'CourseCtrl'
      }).
      when('/department/:code', {	// 'code' here is the department code
      	templateUrl: 'partials/department.html',
      	controller: 'DepartmentCtrl'
      }).
      
      otherwise({
        redirectTo: '/home'
      });
  }]);