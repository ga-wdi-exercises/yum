// seed the database
var orm = require("../orm.js");
orm.connect(seed);

function seed() {

  var Restaurant = orm.Restaurant
  removeRestaurants(function(){
    seedRestaurants(function(){
      Restaurant.count({}, function (err, restaurantCount) {
        if (err) return handleError(err);
        console.log("Seeded", restaurantCount, "restaurants.")
        console.log("Done.")
      });
    });
  });

  function removeRestaurants(callback){
    console.log("Removing all restaurants...")
    Restaurant.remove({}, function(err){
      if (err) return handleError(err);
      Restaurant.count({}, function (err, restaurantCount) {
        if (err) return handleError(err);
        console.log("Remaining restaurants:", restaurantCount)
        callback();
      })
    });
  }

  function seedRestaurants(callback) {
    var restaurantData = [
      { name: "Cookies Corner",
        address: {
          street: "1970 2nd St NW",
          zipcode: 20001,
        },
        yelp: "http://www.yelp.com/biz/cookies-corner-washington"
      },
      { name: "The Blind Dog Cafe", address: { street: "944 Florida Ave", zipcode: 20001 }, yelp: "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies" },
      {name: "Birch & Barley", address: { street: "1337 14th St NW", zipcode: 20005}, yelp: "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"},
      {name: "Captain Cookie and the Milk Man", address: { street: "Dupont Circle", zipcode: 20036 }, yelp: "http://www.yelp.com/biz/captain-cookie-and-the-milk-man-washington-5" },
      {name: "J’s Cookies", address: { street: "1700 N Moore St", zipcode: 22209}, yelp: "http://www.yelp.com/biz/js-cookies-arlington" }
    ]

    console.log("Seeding...")
    Restaurant.create(restaurantData, function(err) {
      if (err) return handleError(err);
      callback();
      // for (var i=1; i<arguments.length; ++i) {
      //     var candy = arguments[i];
      //     // do some stuff with candy
      // }
    });
  }
}
