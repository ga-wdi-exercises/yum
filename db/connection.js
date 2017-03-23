const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yum_db', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('MongoDB is connected')
  }
})

module.exports = mongoose
