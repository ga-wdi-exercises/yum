var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel;
var ItemModel = Schema.ItemModel;

RestaurantModel.remove({}, function(err) {
  console.log(err);
});

ItemModel.remove({}, function(err) {
  console.log(err);
});

var chipotle = new RestaurantModel({
  name: "Chipotle",
  address: {
    street: "4300 Wilson Blvd",
    zipcode: 22203
  },
  yelp_url: "http://www.yelp.com/biz/chipotle-mexican-grill-arlington-6",
});
var pupatella = new RestaurantModel({
  name: "Pupatella",
  address: {
    street: "5104 Wilson Blvd",
    zipcode: 22205
  },
  yelp_url: "http://www.yelp.com/biz/pupatella-arlington-3"
});
var fuego = new RestaurantModel({
  name: "Fuego",
  address: {
    street: "2800 Clarendon Blvd",
    zipcode: 22201
  },
  yelp_url: "http://www.yelp.com/biz/fuego-cocina-y-tequileria-arlington"
});
var lostDog = new RestaurantModel({
  name: "Lost Dog Cafe",
  address: {
    street: "5876 Washington Blvd",
    zipcode: 22205
  },
  yelp_url: "http://www.yelp.com/biz/lost-dog-caf%C3%A9-and-gourmet-pizza-deli-arlington-2"
});

var burrito = new ItemModel({
  title: "Burrito"
});
var tacos = new ItemModel({
  title: "Tacos"
});
var pizza = new ItemModel({
  title: "Pizza"
});
var sandwich = new ItemModel({
  title: "Sandwich"
});
var salad = new ItemModel({
  title: "Salad"
});

chipotle.items.push(burrito, tacos, salad);
pupatella.items.push(pizza, sandwich, salad);
fuego.items.push(tacos);
lostDog.items.push(pizza, sandwich, salad);

var restaurants = [chipotle, pupatella, fuego, lostDog];

restaurants.forEach(function(restaurant) {
  restaurant.save(function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
});
