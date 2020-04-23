const Sequelise = require("sequelize")
const dbConfig = require("../config/database")

const connection = new Sequelise(dbConfig)

module.exports = connection;