var mongoose = require('mongoose');
var Schema = require("../db/schema.js");
var hbs        = require("express-handlebars");

var app        = express();

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

app.set("port", process.env.PORT || 4000);

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(parser.json());


//find a restaurant by name
function restaurantByName(restaurantName){
  Restaurant.findOne({name: restaurantName}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  })
}
