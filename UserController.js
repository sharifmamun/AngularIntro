// Code goes here

(function() {
  var myApp = angular.module('githubViewer');

  var UserController = function($scope, github, $routeParams) {
      
    var onUserComplete = function(data) {
      $scope.user = data;

      github.getRepos($scope.user)
        .then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch data, because of " + reason;
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  myApp.controller('UserController', UserController);

}());