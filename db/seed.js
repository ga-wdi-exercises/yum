
var mongoose = require("./connection");
var seedData = require("./seeds");
//var Restaurant = require("./schema.js").Restaurant
//var Item = require("./schema.js").Item

var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});

/* Restaurant.remove({}, (err) => {
  if(err){
    console.log(err)
  }
})

Item.remove({}, (err) =>{
  if(err){
    console.log(err)
  }
})

var restaurant1 = new Restaurant({ name: "Olive Garden", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
var restaurant2 = new Restaurant({ name: "Lilly Milly's", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
var restaurant3 = new Restaurant({ name: "Pizza Hut", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
var restaurant4 = new Restaurant({ name: "Ben & Jerry's", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})
var restaurant5 = new Restaurant({ name: "Bonefish", address: { street: "1234 Main St NW", zipcode: 20000, }, yelp: "https://www.yelp.com/c/oxon-hill-md-us/restaurants"})

var item1 = new Item({title: "pasta"})
var item2 = new Item({title: "cupcakes"})
var item3 = new Item({title: "pepporoni"})
var item4 = new Item({title: "cheese pizza"})
var item5 = new Item({title: "ice cream"})
var item6 = new Item({title: "sub"})


var items = [item1, item2, item3, item4, item5, item6]
var restaurants = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(...items)

  restaurants[i].save((err, restaurant) => {
      if (err){
        console.log(err)
      } else {
        console.log(restaurant)
      }
    })
  };
*/
