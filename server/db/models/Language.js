const Sequelize = require('sequelize')
const db = require('../db')

const Language = db.define('language', {
    language: {
        type: Sequelize.STRING,
    },
})

module.exports = Language