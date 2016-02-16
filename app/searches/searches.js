angular.module('whereWasI.searches', [])

.controller('SearchesController', function($scope, Searches) {
    angular.extend($scope, Searches);
});