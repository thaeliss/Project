// We setup the main Angular model that we will use for our application
// Good Angular practice is to organize your code in different modules, 
// for instance, one module per feature. However, since our App is
// simple we will keep all the code in the "dinnerPlanner" module
//
// Notice the 'ngRoute' and 'ngResource' in the module declaration. Those are some of the core Angular
// modules we are going to use in this app. If you check the index.html you will
// also see that we included separate JavaScript files for these modules. Angular
// has other core modules that you might want to use and explore when you go deeper
// into developing Angular applications. For this lab, these two will suffice.
var fightingApp = angular.module('fighting', ['ngRoute','ngResource','ngCookies']);


// In some cases we want the path to be variable (e.g. contain the dish id). To define the variable part of 
// the path we use the ":" sign. For instance, our '/dish/:dishId' will be triggered when we access 
// 'http://localhost:8000/#/dish/12345'. The 12345 value will be stored in a dishId parameter, which we can
// then access through $routeParams service. More information on this in the dishCtrl.js 
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
      when('/courselist/', {
        templateUrl: 'partials/courselist.html',
        controller: 'CourselistCtrl'
      }).
      when('/course/', {
        templateUrl: 'partials/course.html',
        controller: 'CourseCtrl'
      }).
      when('/department/:code', {
      	templateUrl: 'partials/department.html',
      	controller: 'DepartmentCtrl'
      }).
      
      otherwise({
        redirectTo: '/home'
      });
  }]);