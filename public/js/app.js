"use strict";

(function() {

    angular
        .module("yum", [
            "ui.router",
            "ngResource"
        ])
        .config([
            "$stateProvider",
            "$locationProvider",
            "$urlRouterProvider",
            Router
        ])

    function Router($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true)
        $stateProvider
            .state("Index", {
                url: "/",
                templateUrl: "/assets/js/restaurants/index.html",
                controller: "IndexController",
                controllerAs: "IndexViewModel"
            })
            .state("Show", {
                url: "/restaurants/:name",
                templateUrl: "/assets/js/restaurants/show.html",
                controller: "ShowController",
                controllerAs: "ShowViewModel"
            })
        $urlRouterProvider.otherwise("/")
    }

})();
