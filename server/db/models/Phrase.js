const Sequelize = require('sequelize')
const db = require('../db')

const Phrase = db.define('phrase', {
    phrase: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.ENUM('General', 'Airport', 'Accomodation', 'Restaurant', 'Transportation', 'Sightseeing', 'Shopping', 'Emergency', 'Events', 'Learning', 'Slang',),
        defaultValue: 'General',
    },
    languageId: {
        type: Sequelize.INTEGER,
    },
    toneId: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Phrase