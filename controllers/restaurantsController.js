const Schema = require('../db/model.js');
const Restaurant = Schema.Restaurant;
const Item = Schema.Item;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants)
    })
  },
    show(req){
      Restaurant.findOne({name: req.name}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    new(req){
      Restaurant.create({name: req.name, address: {street: req.street, zipcode: rer.zipcode}, yelpUrl: req.yelpUrl})
    }
    showbyZip(req){
      Restaurant.find({"address.zipcode": req.zipcode}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    update(req, update){
      Restaurant.findOneAndUpdate({name: req.name}, {name: req.name}, {new: true}, (err, restaurant) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(restaurant);
        }
      });
    }
    destroy(req){
      Restaurant.findOneAndRemove(req, (err, docs) => {
        if(err){
          console.log(err);
        }
        else{
          console.log(docs);
        }
      });
    }
  };
