var Schema = require("../db/schema.js");

// seed the database
var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;


Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})

//creates new objects of resturants to put in database
  var resturant1 = new Restaurant({ name: "Taco Bell", address: { street: "40 Massachusetts Ave NE", zipcode: 20002, }, yelp: "http://www.yelp.com/biz/taco-bell-washington-16"})


//creates new objects of menu to put in database
  var food1 = new Menu({title: "crunchwrap supreme"})

  var menu = [food1]
  var resturants = [resturant1]

  resturants.forEach(function(resturant, i){
    resturant.items.push(menu[i], menu[i+3]);
    resturant.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  });
