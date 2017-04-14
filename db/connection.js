const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_fmbpqk9c:lk8t50talmb31ndm3i8a67qjvp@ds155490.mlab.com:55490/heroku_fmbpqk9c', (err, res) => {
  if(err){
    console.log(err)
  } else {
    console.log("MongoDB connected")
  }
})

const db = mongoose.connection

module.exports = mongoose
