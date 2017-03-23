                // #################################
                // 201703232019L   EL MIERCOLES   JAY
                                  // Its aliiive! // [nodemon] restarting due to changes... // [nodemon] starting `node index.js` // Its aliiive!
                                  // (node:82858) DeprecationWarning: Mongoose: mpromise (mongooses default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html // [ { _id: 58d3327e56e857fe19b6741a, //     name: charlie, //     __v: 0, //     items: [] }, //   { _id: 58d3327e56e857fe19b6741b, name: tom, __v: 0, items: [] }, //   { _id: 58d3327e56e857fe19b67419, //     name: arbys, //     __v: 0, //     items: [ [Object], [Object], [Object] ] } ]

                                  //Initializing Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

// Save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', console.error.bind(console, 'connection error:'));

// Will log "database has been connected" if it successfully connects.
db.once('open', () => {
  console.log('database has been connected!');
});

//Schema
var Schema = mongoose.Schema;

var MenuitemSchema = new Schema({
  title: String,
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuitemSchema]
});

//Models
var Menuitem = mongoose.model('MenuItem', MenuitemSchema);
var Restaurant= mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
    Menuitem: Menuitem,
    Restaurant: Restaurant
};
