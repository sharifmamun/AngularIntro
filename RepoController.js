// Code goes here

(function() {
  var myApp = angular.module('githubViewer');

  var RepoController = function($scope, github, $routeParams) {
    
    var onRepoInfo = function(data) {
      $log.info(data);
      $scope.repo = data;
      $log.info($scope.repo);
    };

    var onError = function(reason) {
      $scope.error = reason;
    };

      
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    github.getRepoInfo($scope.username, $scope.reponame)
          .then(onRepoInfo, onError);
  };

  myApp.controller('RepoController', RepoController);

}());