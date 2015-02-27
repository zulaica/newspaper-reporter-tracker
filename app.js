var beatTracker3000 = angular.module("beatTracker3000", ["ui.router"]);

beatTracker3000.config(function($stateProvider) {
  $stateProvider.state("beats", {
    url: "",
    templateUrl: "partials/beats.html",
    controller: "BeatsCtrl"
  });
  $stateProvider.state("beats.reporters", {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: "ReportersCtrl"
  });
});
