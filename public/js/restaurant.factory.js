"use strict";

(function (){
  angular
  .module("resturants")
  .factory("RestaurantFactory"), [
     "$resource",
     Restaurant
  ])

  function Restaurant ($resource){
    return $resource("/api/restaurants/:name"), {}, {

    })
  }
})();
