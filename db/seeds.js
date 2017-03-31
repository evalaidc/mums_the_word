const Spot = require('./models.js').Spot

const seedData = require('./spotsSeedData.json')

Spot.remove({}, () => {
  Spot.create(seedData, () => {
    process.exit()
  })
})
