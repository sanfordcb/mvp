angular.module('whereWasI.projects', ['whereWasI.searches'])

.controller('ProjectsController', function($scope, Projects) {
    angular.extend($scope, Projects);
    // angular.extend($scope, Searches);
    $scope.addProjects = function(proj) {
      Projects.addProject(proj);
    };
});