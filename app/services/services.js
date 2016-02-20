angular.module('whereWasI.services', [])

.factory('Projects', function() {
  var projects = [];
  var project = {};

  var addProject = function(proj) {
    project = {title: proj, created: Date.now(), resources: []};
    projects.push(project);
    console.log(project);
  };

  var projLink = function(title) {
    var space = title.indexOf(' ');
    return title.slice(0, space);
  };

  var addSearch = function(projectName, url, notes) {
    
    project.resources.push({title: url, notes: notes});
    console.log(project.resources);
  };

  return {
    projects: projects,
    project: project,
    addProject: addProject,
    projLink: projLink,
    addSearch: addSearch
  }
})

// .factory('Searches', function() {
//   var searches = [];

//   var addSearch = function(url, notes) {
//     searches.push({title: url, notes: notes});
//   };

//   return {
//     searches: searches,
//     addSearch: addSearch
//   }
// });