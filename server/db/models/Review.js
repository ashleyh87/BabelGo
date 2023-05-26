const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
    rating: {
        type: Sequelize.FLOAT,
    },
    isGood: {
        type: Sequelize.BOOLEAN,
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    phraseId: {
        type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    }
})

module.exports = Review