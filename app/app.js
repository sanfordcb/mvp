angular.module('whereWasI', [
    'whereWasI.services',
    'whereWasI.projects',
    'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
    .when('/projects', {
      templateUrl: 'app/projects/projects.html',
      controller: 'ProjectsController'
    })
    .otherwise({ redirectTo: '/' });
});