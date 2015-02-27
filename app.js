var beatTracker3000 = angular.module("beatTracker3000", ["ui.router"]);

beatTracker3000.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: "BeatsCtrl"
  });
  // $stateProvider.state('', {
  //   url: "",
  //   templateUrl: "partials/beats.html",
  //   controller: "BeatsCtrl"
  // });
});
