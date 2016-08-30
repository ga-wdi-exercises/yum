var Model = require("./schema.js");

var Restaurant = Model.Restaurant;
var MenuItem = Model.MenuItems;

// First we clear the database of existing students and projects.
Restaurant.remove({}, function(err){
  console.log(err)
});

MenuItem.remove({}, function(err){
  console.log(err)
});

// Now we generate instances of Student and Project.
var mcdonalds = new Restaurant({name: "mcdonald's"})
var bk = new Restaurant({name: "Burger King"})
var wendys = new Restaurant({name: "Wendy's"})


var restaurants = [mcdonalds, bk, wendys]

// Here we assign some projects to each student.
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].save(function(err, restaurant){
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
