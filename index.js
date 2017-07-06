// var mongoose = require('mongoose');
let express = require('express')
let mongoose = require("./db/schema.js");
// let Restaurant = Schema.Restaurant
// let MenuItem = Schema.MenuItem
let hbs = require("express-handlebars")
let parser = require("body-parser")
let Restaurant = mongoose.model("Restaurant")
let MenuItem = mongoose.model("MenuItem")

let app = express();

app.set("port", 4000);
app.set("view engine","hbs");
app.engine(".hbs", hbs({
	extname: 	 ".hbs",
	partialsDir: "views/",  
	layoutsDir:  "views/",
	defaultLayout:"layout"
}))
app.use(parser.urlencoded({extended:true}))
//Routes
app.get("/restaurants", function(req,res) {
	Restaurant.find({}).then((restaurant)=>{
		res.render("index",{
			eatery: restaurant
		})
	})
})
app.get("/restaurants/:name",function(req,res){
	Restaurant.findOne({name: req.params.name}).then((restaurant)=>{
		res.render("show",{
			eatery: restaurant
		})
	})
})
//new new restaurant
app.post("/restaurants",function(req,res){
	Restaurant.create(req.body.restaurant).then((restaurant)=>{
		res.redirect(`/restaurants/${restaurant.name}`)
	})
})
//update restaurant
app.post("/restaurants/:name",function(req,res){
	Restaurant.findOneAndUpdate({name: req.params.name},req.body.restaurant,{new:true}).then((restaurant)=>{
		res.redirect(`/restaurants/${restaurant.name}`)
	})
})
//remove restaurant
app.post("/restaurants/:name/delete",function(req,res){
	Restaurant.findOneAndRemove({}).then(()=>{
	})
})
//add menu item to restrant
app.post("/restaurants/:name/add",function(req,res){
	MenuItem.create(req.body.menuItem).then((item)=>{
		Restaurant.findOne(req.params.name).then((restaurant)=>{
			restaurant.items = item
		})
	})
	// Restaurant.findOneAndUpdate({name: req.params.name},req.body.restaurant.items,{new:true}).then((restaurant)=>{
	// 	res.redirect(`/restaurants/${restaurant.name}`)
	// })
	// Restaurant.create(req.body.item)
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})