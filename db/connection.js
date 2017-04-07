const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mums_the_word_db', (err, res) => {
  if(err){
    console.log(err)
  } else {
    console.log("MongoDB connected")
  }
})

const db = mongoose.connection

module.exports = mongoose
