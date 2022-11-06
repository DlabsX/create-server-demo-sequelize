const { Sequelize } = require('sequelize')

const db = new Sequelize('postgress://postgress:dalton@localhost:5432/demo',{
    logging: false
})


module.exports = {
    db
}