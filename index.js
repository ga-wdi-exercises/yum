let express = require('express')
let hbs = require('express-handlebars')
let parser = require('body-parser')
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

let app = express();

let Restaurant = Schema.RestaurantModel
let MenuItem = Schema.MenuItemModel

app.set("port", process.env.PORT || 3002);
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
// app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
	console.log("home")
  res.render("home");
});

app.get("/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index", {
      restaurants: restaurants
    });
  });
});

app.get("/restaurants/:id", function(req, res){
	Restaurant.findById(req.params.id).then(function(restaurant) {
		console.log("going somewhere")
			restaurant.item.forEach((item) => {
				MenuItem.findById(item._id).then(function(item) {
					console.log("blah " + item.name)
				})
			})
		res.render("restaurant-show", {
			restaurant: restaurant
		})
	})
})


app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant._id);
  });
});

app.post("/restaurants/:id/delete", function(req, res){
  Restaurant.findOneAndRemove({_id: req.params.id}).then(function(){
    res.redirect("/restaurants")
  });
});

app.post("/restaurants/:id", function(req, res){
  Restaurant.findOneAndUpdate({_id: req.params.id}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant._id);
  });
});

app.listen(3002, () => {
	console.log('app listening on port 3002')
})

// let number4 = Restaurant.findOne({name: "Pizza Hut"}, (err, restaurant) => {
// 	console.log("number 4: " + restaurant)
// })

// let number5 = Restaurant.find( {"address.zipcode": 43953  }, (err, restaurants) => {
// 	console.log("number 5: " + restaurants)
// })

// let number6 = Restaurant.findOneAndUpdate({name: "Chuckie Cheeze"}, {name: "Chuckie CHEEZ"}, {new: true}, (err, docs) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(docs)
// 	}
// })


// let number7 = Restaurant.findOneAndRemove({name: "Chuckie Cheeze"}, (err, docs) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(docs)
// 	}
// })

// let number8 = Restaurant.find({name: "Pizza Hut"}, (err, restaurant) => {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		restaurant.menuitems.id(5924e905).remove()
// 		restaurant.save()
// 	}
// })