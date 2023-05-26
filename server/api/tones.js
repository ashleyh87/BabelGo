const router = require('express').Router()
const { models: { Tone } } = require('../db')
module.exports = router

// Get all Tones
router.get('/', async (req, res) => {
    try {
        const tones = await Tone.findAll();
        res.json(tones);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Tones' });
    }
});

// Get a Tones by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tone = await Tone.findByPk(id);
        if (tone) {
            res.json(tone);
        } else {
            res.status(404).json({ error: 'Tone not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Tone' });
    }
});

// Create a new Tone
router.post('/', async (req, res) => {
    const { tone } = req.body;
    try {
        const newTone = await Tone.create({ tone });
        res.status(201).json(newTone);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Tone' });
    }
});

// Update a Tone by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { tone } = req.body;
    try {
        const updatedTone = await Tone.update(
            { tone },
            { where: { id }, returning: true }
        );
        if (updatedTone[0] === 0) {
            res.status(404).json({ error: 'Tone not found' });
        } else {
            res.json(updatedTone[1][0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Tone' });
    }
});

// Delete a Tone by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedToneCount = await Tone.destroy({ where: { id } });
        if (deletedToneCount === 0) {
            res.status(404).json({ error: 'Tone not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Tone' });
    }
});

module.exports = router;