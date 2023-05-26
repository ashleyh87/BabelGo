const router = require('express').Router()
const { models: { Language } } = require('../db')
module.exports = router

// Get all languages
router.get('/', async (req, res) => {
    try {
        const languages = await Language.findAll();
        res.json(languages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve languages' });
    }
});

// Get a language by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const language = await Language.findByPk(id);
        if (language) {
            res.json(language);
        } else {
            res.status(404).json({ error: 'Language not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve language' });
    }
});

// Create a new language
router.post('/', async (req, res) => {
    const { language } = req.body;
    try {
        const newLanguage = await Language.create({ language });
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create language' });
    }
});

// Update a language by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { language } = req.body;
    try {
        const updatedLanguage = await Language.update(
            { language },
            { where: { id }, returning: true }
        );
        if (updatedLanguage[0] === 0) {
            res.status(404).json({ error: 'Language not found' });
        } else {
            res.json(updatedLanguage[1][0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update language' });
    }
});

// Delete a language by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLanguageCount = await Language.destroy({ where: { id } });
        if (deletedLanguageCount === 0) {
            res.status(404).json({ error: 'Language not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete language' });
    }
});

module.exports = router;