const Sequelize = require('sequelize')
const db = require('../db')

const Tone = db.define('tone', {
    tone: {
        type: Sequelize.STRING,
    },
})

module.exports = Tone