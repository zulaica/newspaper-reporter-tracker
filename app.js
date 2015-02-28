var beatTracker3000 = angular.module("beatTracker3000", ["ui.router","ngMaterial"])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme("default")
  .primaryPalette("blue-grey")
  .accentPalette("deep-orange");
});

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
