var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
    index(){
        Restaurant.find({}, (err, restaurants) => {
            console.log(restaurants);
        });
    },
    show(req){
        Restaurant.findOne({name: req.name}, (err, restaurant) => {
            console.log(restaurant);
        });
    },

    
    function findByZip(zipcode){
        results = [];
        Restaurant.find({}, function(err, docs){
            docs.forEach(function(rest){
                if(rest.address.zipcode === zipcode){
                    results.push(rest);
                }
            });
            console.log(results);
        });
    }


    update: function(req, update){
        RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
            if(err){
                console.log(err);
            }
            else{
                console.log(docs);
            }
        });
    },
    destroy: function(req){
        RestaurantModel.findOneAndRemove(req, function(err, docs){
            if(err){
                console.log(err);
            }
            else{
                console.log(docs);
            }
        });
    }
};

restaurantsController.destroy({name: "Ozio Rooftop"});

restaurantsController.index();
restaurantsController.show({name: "Ozio Rooftop"})

module.exports = {
    restaurantsController
};
