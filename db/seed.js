var mongoose = require("./schema.js");

let MenuItem = mongoose.model("MenuItem")
let Restaurant = mongoose.model("Restaurant")

//remove data from database
MenuItem.remove({}, error =>{if(error){console.log(error)}})
Restaurant.remove({}, error =>{if(error){console.log(error)}})

//seed data
let mac_n_cheese = new MenuItem({ title: "Mac and Cheese"})
let burger = new MenuItem({title: "Classic Burger"})
let stakeNcheese = new MenuItem({title: "Steak and Cheese Sub"})


let wbinn= new Restaurant({
	name: "The Woodbine Inn",
	address: {street: "123 SomeRoad St.", zip: 20001},
	yelpUrl: "https://google.com",
	items: [burger, mac_n_cheese, stakeNcheese]
})
let greene = new Restaurant({
	name: "The Greene Turtle",
	address: {street: "123 SomeRoad St.", zip: 20001},
	yelpUrl: "https://google.com",
	items: [burger, mac_n_cheese, stakeNcheese]
})
let theGrille = new Restaurant({
	name: "River Hill Grille",
	address: {street: "123 SomeRoad St.", zip: 20000},
	yelpUrl: "https://google.com",
	items: [burger, mac_n_cheese ]
})


let restaurants = [wbinn,greene,theGrille]
restaurants.forEach((place,idx)=>{
	restaurants[idx].save((error,place)=>{
		if(error){
			console.log(error)
		}else{
			console.log(place)
		}
	})
})