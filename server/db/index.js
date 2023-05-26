const db = require('./db');
const User = require('./models/User');
const Language = require('./models/Language');
const Tone = require('./models/Tone');
const Phrase = require('./models/Phrase');
const Review = require('./models/Review');

// Associations
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Language.hasMany(Tone, { foreignKey: 'languageId' });
Tone.belongsTo(Language, { foreignKey: 'languageId' });

Language.hasMany(Phrase, { foreignKey: 'languageId' });
Phrase.belongsTo(Language, { foreignKey: 'languageId' });

Tone.hasMany(Phrase, { foreignKey: 'toneId' });
Phrase.belongsTo(Tone, { foreignKey: 'toneId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Phrase.hasMany(Review, { foreignKey: 'phraseId' });
Review.belongsTo(Phrase, { foreignKey: 'phraseId' });

module.exports = {
  db,
  models: {
    User,
    Language,
    Tone,
    Phrase,
    Review,
  },
};
