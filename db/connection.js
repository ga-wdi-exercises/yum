const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant', (err => {
    (err) ? console.log(err): console.log("MongoDb is Connected");
}));

module.exports = mongoose;
