var express = require("express");
var parser = require("body-parser")
var Schema = require("./db/schema.js");
var app = express();

var Restaurant = Schema.Restaurant
// var MenuItem = Schema.MenuItem

app.set("view engine", "hbs");
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

app.get("/restaurants", function(req, res) {
  Restaurant.find({}).then ((restaurants) => {
    res.render("restaurants-index", {
      restaurants: restaurants
    });
  });
});

app.get("/restaurants/:name", function(req, res) {
  Restaurant.findOne({name: req.params.name}).then ((restaurant) => {
    res.render("restaurants-show", {
      restaurant: restaurant
    });
  });
});

app.post("/restaurants", function(req, res) {
  Restaurant.create(req.body.restaurant).then ((restaurant) => {
    res.redirect("/restaurants/" + restaurant.name)
    });
  });












// Create a new restaurant

// Restaurant.create({ name: "Vapiano", address: {street: "1800 M St NW", zipcode: 20036}, yelp: "https://www.yelp.com/biz/vapiano-washington-2" }, function (err, restaurant) {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log(restaurant)
//   }
// })

// Write a function or method that finds a restaurant by name

  // Restaurant.findOne({name: "Kazan"}, (err,restaurant) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   else {
  //     console.log(restaurant)
  //   }
  // });

// Write a function or method that finds all restaurants by zipCode

// function findZipCode(zip) {
//   Restaurant.find({'address.zipcode': zip }, (err,restaurant) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       console.log(true);
//       console.log(restaurant)
//     }
//   });
// }
// findZipCode(20005)


// Create a function that updates a restaurant

// function update(req, update){
//   Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, restaurant){
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(restaurant);
//     }
//   });
// }

// update({name: "Kazan"}, {name: "Divan"});


// Write a function or method that deletes a restaurant

// function destroy(req) {
//   Restaurant.findOneAndRemove(req, (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       console.log(result)
//     }
//   })
// }
//
// destroy({name: "Divan"});


// Write methods to add and remove embedded menu item documents for a restaurant of your choosing.

// function addMenuItem(restaurant, item) {
//   Restaurant.findOne({name: restaurant}, (err, docs) => {
//     docs.items.push(new MenuItem({title: item}))
//     docs.save(function (err, results) {
//       if (err) {
//         console.log(err)
//       }
//       else {
//         console.log(results);
//       }
//     })
//   });
// }
//
// addMenuItem({name: "Kazan"}, {title: "Turkish Kebab"});
