angular.module('whereWasI.services', [])

.factory('Projects', function() {
  var projects = [];

  var addProject = function(proj) {
    projects.push({title: proj, created: Date.now()})
  };

  var projLink = function(title) {
    var space = title.indexOf(' ');
    return title.slice(0, space);
  };

  return {
    projects: projects,
    addProject: addProject,
    projLink: projLink
  }
})

.factory('Searches', function() {
  var searches = [];

  var addSearch = function(url) {
    searches.push({title: url});
  };

  return {
    searches: searches,
    addSearch: addSearch
  }
});