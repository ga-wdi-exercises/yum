var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

var menuItemsController = {
  index: function(){
    MenuItem.find({}, function(err, docs){
      console.log(docs);
    });
  }
};

menuItemsController.index();

var menuItemsController = {
  index: function(){
    MenuItem.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    MenuItem.findOne({"title": req.title}, function(err, docs){
      console.log(docs);
    });
  }
};

menuItemsController.show({title: "Potato"});
