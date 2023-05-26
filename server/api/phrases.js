const router = require('express').Router()
const { models: { Phrase } } = require('../db')
module.exports = router

// Get all phrases
router.get('/', async (req, res) => {
    try {
        const phrases = await Phrase.findAll();
        res.json(phrases);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve phrases' });
    }
});

// Get a phrases by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const phrase = await Phrase.findByPk(id);
        if (phrase) {
            res.json(phrase);
        } else {
            res.status(404).json({ error: 'Phrase not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve phrase' });
    }
});

// Create a new phrase
router.post('/', async (req, res) => {
    const { phrase } = req.body;
    try {
        const newPhrase = await Phrase.create({ phrase });
        res.status(201).json(newPhrase);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create phrase' });
    }
});

// Update a phrase by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { phrase } = req.body;
    try {
        const updatedPhrase = await phrase.update(
            { phrase },
            { where: { id }, returning: true }
        );
        if (updatedPhrase[0] === 0) {
            res.status(404).json({ error: 'phrase not found' });
        } else {
            res.json(updatedPhrase[1][0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update phrase' });
    }
});

// Delete a phrase by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPhraseCount = await phrase.destroy({ where: { id } });
        if (deletedPhraseCount === 0) {
            res.status(404).json({ error: 'phrase not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete phrase' });
    }
});

module.exports = router;