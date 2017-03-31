const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mums_the_word_db', () => {
  if(err){
    console.log(err)
  } else {
    console.log("MongoDB connected")
  }
})

const db = mongoose.connection

modules.exports = mongoose
