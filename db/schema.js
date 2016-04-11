var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

  var Schema = mongoose.Schema,
  ObjectId = Schema.ObejectId;

  var ItemSchema = new Schema({
    title: String
  });

  var RestaurantSchema = new Schema({
    name: String,
    address: {street: String, zipcode: Number},
    yelp_url: String,
    items: [ItemSchema]
  });

  var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
  var ItemModel = mongoose.model("Item", ItemSchema);

  module.exports ={
    RestaurantModel: RestaurantModel,
    ItemModel: ItemModel
  };

  //could not get this section to work in another file
  // var diner = new RestaurantModel({name: "The Diner", address:{street: "101 18th Street", zipcode: 20006}, yelp_url:"www.yelp.com"});
  //
  // var chicken = new ItemModel({title: "chicken"});
  //
  // diner.items.push(chicken);
  // diner.save(function(err, restaurant){
  //   if (err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log(restaurant.items);
  //   }
  // });
  //end of seed section

  //finds all restaurants
  function index(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
    });
  }

  //finds a restaurant by name
  function show(res_name){
    RestaurantModel.findOne({"name": res_name.name}, function(err, doc){
      console.log(doc.name);
    });
  }

  //finds all restaurants by zipCode
  function zip_code(zip){
    RestaurantModel.find({"address.zipcode": zip}, 'name', function(err, doc){
      console.log(doc);
    });
  }

  //updates a restaurant
  function up_date(old, update){
    RestaurantModel.findOneAndUpdate(old, update, {new: true}, function(err, doc){
      if (err){
        console.log(err);
      }
      else{
        console.log(doc);
      }
    });
  }

  //deletes a restaurant
  function de_lete(req){
    RestaurantModel.findOneAndRemove(req, function(err, doc){
      if (err){
        console.log(err);
      }
      else{
        console.log(req + " has been deleted");
      }
    });
  }

  //adds a new menu item
  function addItem(place, food){
    RestaurantModel.findOneAndUpdate(place, {items: {title: food.title}}, {new: true}, function(err, doc){
      if (err){
        console.log(err);
      }
      else{
        console.log(doc);
      }
    });
  }

//deletes a menu item
  function removeItem(place, food){
    RestaurantModel.findOneAndRemove(place, {items: {title: food.title}}, {new: true}, function(err, doc){
      if (err){
        console.log(err);
      }
      else{
        console.log(doc);
      }
    });
  }

});
