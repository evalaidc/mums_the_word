const express = require('express')
const parser = require('body-parser');
const mongoose = require('../db/connection.js');
const Spot = require('../db/models.js').Spot

const app = express()
const router = express.Router()
// maybe use this to connect front end to backend
app.set('view engine', 'react')
app.set("port", process.env.PORT || 3001);

app.use("/assets", express.static("public"));
app.us(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.listen(app.get("port"), () => {
  console.log('express started on port');
})
