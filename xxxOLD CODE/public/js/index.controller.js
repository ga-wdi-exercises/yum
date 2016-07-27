"use strict";

(function () {
  angular
    .module("restaurants")
    .controller("indexCtrl", [
      "RestaurantFactory",
      indexController
    ])

  function indexController (RestaurantFactory) {
    var vm = this;
    RestaurantFactory.query().$promise.then(function (restaurants) {
      vm.restaurants = restaurants;
    })
  }
})();
