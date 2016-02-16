angular.module('whereWasI.projects', []);

.controller('ProjectsController', function($scope, Projects) {
    angular.extend($scope, Projects);

  }
});