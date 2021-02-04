const db = require('../models')

exports.index = (req, res) => {
  db.Plant.findAll({
    where: {
      UserId: req.user.id,
    },
  }).then((dbTrip) => {
    res.render('trips/trips', {
      layout: 'main-trips',
      plant: dbTrip,
    })
  })
}

exports.createTrip = (req, res) => {
  // Add id from User onto req.body
  req.body.UserId = req.user.id

  db.Plant.create(req.body).then((dbPost) => res.json(dbPost))
}
