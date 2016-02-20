angular.module('whereWasI.searches', ['whereWasI.projects'])

.controller('SearchesController', function($scope, Projects) {
    angular.extend($scope, Projects);
    //angular.extend($scope, Searches);
    $scope.addSearch = function(projectName, url, notes) {
      Projects.addSearch(projectName, url, notes);
    };
});