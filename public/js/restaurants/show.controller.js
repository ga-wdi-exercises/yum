"use strict";

(function() {
    angular
        .module("yum")
        .controller("ShowController", [
            "$state",
            "$stateParams",
            "RestaurantFactory",
            ShowControllerFunction
        ])

    function ShowControllerFunction($state, $stateParams, RestaurantFactory) {
        var vm = this;
        RestaurantFactory.get({
            name: $stateParams.name
        }).$promise.then(function(restaurant) {
            vm.restaurant = restaurant;
        })
        vm.update = function() {
            RestaurantFactory.update({
                name: $stateParams.name
            }, {
                restaurant: vm.restaurant
            }).$promise.then(function(restaurant) {
                $state.go("Show", {
                    name: $stateParams.name
                });
            })
        }

        vm.addItem = function(title, desc) {
            var newItem = {
                title: title,
                description: desc
            }
            vm.restaurant.items.push(newItem);
            RestaurantFactory.update({
                name: $stateParams.name
            }, {
                restaurant: vm.restaurant
            }).$promise.then(function(restaurant) {
                $state.go("Show", {
                    name: $stateParams.name
                });
            })
        }

        vm.destroy = function() {
            vm.restaurant.$remove({
                name: $stateParams.name
            }).then(function(response) {
                if (response.success) $state.go("Index");
            })
        }

        vm.removeItem = function(index) {
            vm.restaurant.items.splice(index, 1);
            RestaurantFactory.update({
                name: $stateParams.name
            }, {
                restaurant: vm.restaurant
            }).$promise.then(function(restaurant) {
                $state.go("Show", {
                    name: $stateParams.name
                });
            })
        }

    }
})();
