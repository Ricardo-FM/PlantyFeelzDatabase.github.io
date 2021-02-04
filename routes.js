module.exports = (app) => {
  const application = require('./routes/application')
  const users = require('./routes/users')
  const plants = require('./routes/plants')

  app.use('/', application)
  app.use('/users', users)
  app.use('/plants', plants)
  //other routes..
}
