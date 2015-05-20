var orm = require("./orm.js");
orm.connect(main);

function main() {
  var Restaurant = orm.Restaurant
  console.log("The Restaurant model:", Restaurant)

  Restaurant.displayFromZipcode = function(searchZipcode){
    Restaurant.count({"address.zipcode": searchZipcode}, function (err, restaurantCount) {
      if (err) return handleError(err);
      console.log("We have", restaurantCount, "in", searchZipcode)
    })

    var query = Restaurant.find({"address.zipcode": searchZipcode});
    query.select('-_id name address.zipcode');
    query.exec(function (err, restaurants) {
      if (err) return handleError(err);
      console.log("In", searchZipcode, ":", restaurants)
    })

  }

  // List restaurants in zipcode 20001
  Restaurant.displayFromZipcode(20001)

  //Create a restaurant
  Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
    if (err) return handleError(err);
    // saved!
    console.log("We created", restaurant.name, 'in', restaurant.address.zipcode)
    Restaurant.displayFromZipcode(20001)
  })
}
