angular.module('whereWasI', [
    'whereWasI.services',
    'whereWasI.projects',
    'whereWasI.searches',
    'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
    .when('/projects', {
      templateUrl: 'projects/projects.html',
      controller: 'ProjectsController'
    })
    .when('/searches', {
      templateUrl: 'searches/searches.html',
      controller: 'SearchesController'
    })
    .otherwise({ redirectTo: '/' })
});