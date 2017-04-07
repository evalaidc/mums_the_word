const express = require('express')
const parser = require('body-parser');
const mongoose = require('../db/connection.js');
const Spot = require('../db/models.js').Spot

const app = express()
const router = express.Router()
// maybe use this to connect front end to backend, cross origin resource sharing
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

 //and remove caching so we get the most recent updates
  res.setHeader('Cache-Control', 'no-cache')
  next()
 })

app.set('view engine', 'react')

app.set("port", process.env.PORT || 3001)
app.use("/assets", express.static("public"))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

//Use our router configuration when we call /api
app.use('/api', router)

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
})
// show all spots
router.get('/spots', function(req, res){
  Spot.find({}).then( function(spots){
    res.json(spots)
  })
})

// create a new spot
router.post("/spots/new", function(req, res){
  var spot = new Spot({
    title: req.body.title,
    author: req.body.author,
    blurb: req.body.blurb,
    photo_url: req.body.photo_url,
    address: req.body.address,
    longitude: req.body.longitude,
    latitude: req.body.latitude
  })

  spot.save(function(err, spot) {
   if (err){
    console.log(err);
  }
   })
});


// show 1 specific spot
router.get("/spots/:title", function(req,res) {
  Spot.findOne({title: req.params.title}).then(function(spot){
    res.json(spot)
  })
})


// delete a certain spot
router.delete("/spots/:title", function(req, res){
  Spot.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({success: true});
  });
});

// listen for the server request
app.listen(app.get("port"), () => {
  console.log(`api running`);
})
