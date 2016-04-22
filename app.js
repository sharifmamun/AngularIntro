(function(){
  
  var myApp = angular.module('githubViewer', ["ngRoute"]);
  
  myApp.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:response", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({redirectTo: "/main"});
  });
}());