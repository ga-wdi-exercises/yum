var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var RestaurantSchema = new Schema ({
  name: String,
  address: {'street': String, 'zipcode': Number},
  yelpUrl: String,
  items: []
});

var MenuItemSchema = new Schema ({
  title: String
})


var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};

var pica = new Restaurant({name: "Pica Taco", address:{street: "1629 Columbia Rd NW", zipcode: 20009}, yelpUrl: "https://www.yelp.com/biz/pica-taco-washington"})
var taco = new MenuItem({title: "Tacos al Pastor"})

pica.items.push(taco)

pica.save((err, restaurant) => {
  if(err){
    console.log(err);
  }
  else{
    console.log(restaurant);
  }
});
