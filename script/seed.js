'use strict'

const { db, models: { User, Language, Phrase, Review, Tone } } = require('../server/db');


async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ username: 'monica_geller', firstName: 'Monica', lastName: 'Geller', email: 'monica@example.com', password: 'password123', isAdmin: true }),
    User.create({ username: 'chandler_bing', firstName: 'Chandler', lastName: 'Bing', email: 'chandler@example.com', password: 'password456', isAdmin: false }),
    User.create({ username: 'joey_tribbiani', firstName: 'Joey', lastName: 'Tribbiani', email: 'joey@example.com', password: 'password789', isAdmin: false }),
    User.create({ username: 'rachel_green', firstName: 'Rachel', lastName: 'Green', email: 'rachel@example.com', password: 'passwordabc', isAdmin: false }),
    User.create({ username: 'ross_geller', firstName: 'Ross', lastName: 'Geller', email: 'ross@example.com', password: 'passworddef', isAdmin: false }),
    User.create({ username: 'phoebe_buffay', firstName: 'Phoebe', lastName: 'Buffay', email: 'phoebe@example.com', password: 'passwordxyz', isAdmin: false }),
  ]);

  // Create languages
  const languages = await Promise.all([
    Language.create({ language: 'English' }),
  ]);

  // Create tones
  const tones = await Promise.all([
    Tone.create({ tone: 'Neutral' }),
    Tone.create({ tone: 'Professional' }),
    Tone.create({ tone: 'Casual' }),
    Tone.create({ tone: 'Friendly' }),
  ]);

  // Create phrases
  const phrases = await Promise.all([
    Phrase.create({ phrase: 'Hello', category: 'General', languageId: 1, toneId: 1 }),
    Phrase.create({ phrase: 'Hello', category: 'General', languageId: 1, toneId: 2 }),
    Phrase.create({ phrase: 'Hi', category: 'General', languageId: 1, toneId: 3 }),
    Phrase.create({ phrase: 'Hey', category: 'General', languageId: 1, toneId: 3 }),
  ]);

  // Create reviews
  const reviews = await Promise.all([
    Review.create({ rating: 4.5, comment: 'Great phrase!', isGood: true, phraseId: 1, userId: 1 }),
    Review.create({ rating: 3.0, comment: 'Could be better', isGood: false, phraseId: 2, userId: 2 }),
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${languages.length} languages`)
  console.log(`seeded ${tones.length} tones`)
  console.log(`seeded ${phrases.length} phrases`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded successfully`)
  return {
    users,
    languages,
    tones,
    phrases,
    reviews,
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
