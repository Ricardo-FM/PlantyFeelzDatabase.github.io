const db = require('../models')

exports.index = (req, res) => {
  db.Plant.findAll({}).then((dbPlant) => {
    res.render('plants/plants', {
      layout: 'main-plants',
      plant: dbPlant,
    })
  })
}

exports.createPlant = (req, res) => {
  // Add id from User onto req.body
  req.body.UserId = req.user.id

  db.Plant.create(req.body).then((dbPost) => res.json(dbPost))
}
