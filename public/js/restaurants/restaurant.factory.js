"use strict";

(function() {
    angular
        .module("yum")
        .factory("RestaurantFactory", [
            "$resource",
            RestaurantFactoryFunction
        ]);

    function RestaurantFactoryFunction($resource) {
        return $resource("http://localhost:3001/api/restaurants/:name", {}, {
            update: {
                method: "PUT"
            }
        });
    }
})();
