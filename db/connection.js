const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/yum", (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("MongoDB connected");
  }
})


module.exports = mongoose
