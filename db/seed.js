var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.remove({}, function(err){
  console.log(err);
});
MenuItem.remove({}, function(err){
  console.log(err);
});


restaurant1 = new Restaurant ({
  name: "Johnny Shop" ,
  address: "1500th Street" ,
  zipcode: "13272" ,
  street: "Quard square" ,
  yelp: "yelp.com/johnneh"
});
restaurant2 = new Restaurant ({
  name: "Tommy Shop" ,
  address: "1400th Street" ,
  zipcode: "13172" ,
  street: "Washington" ,
  yelp: "yelp.com/tommeh"
});

var item1 = new menuitem ({title: "chocolate chip cookie"});
var item2 = new menuitem ({title: "pizza"});

var menuitems = [item1 , item2];
var restaurants = [restaurant1, restaurant2];

restaurants.forEach(function(restaurant, i){
  resturant.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
});
});
