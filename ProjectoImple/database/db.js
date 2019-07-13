const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs_tasks', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
})


module.exports = sequelize
