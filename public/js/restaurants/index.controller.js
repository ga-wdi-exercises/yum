"use strict";

(function() {
    angular
        .module("yum")
        .controller("IndexController", [
            "RestaurantFactory",
            IndexControllerFunction
        ])

    function IndexControllerFunction(RestaurantFactory) {
        var vm = this;
        RestaurantFactory.query().$promise.then(function(restaurants) {
            console.log(restaurants);
            vm.restaurants = restaurants;
        });
    }

})();
