var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var MenuItemSchema =  new mongoose.Schema({
  title: String
})

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {street: String,
            zipCode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
});

var MenuItem = mongoose.model("MenuItem", MenuItemSchema)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema)

//had to use create to make the database, since I didn't use insert or create it through the CLI
Restaurant.create({
  name: "Subway",
  address: {street: "1000 29th St",
            zipCode: 21218
          },
  yelpUrl: "Test",
  items: [{title: "sandwich"}, {title: "chips"}, {title: "salad"} ]
});

module.exports = mongoose;

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};

db.once('open', () => {
  console.log("database has been connected!");
});
