const router = require('express').Router()
const { models: { Review } } = require('../db')
module.exports = router

// Get all Reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Reviews' });
    }
});

// Get a Reviews by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            res.json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Review' });
    }
});

// Create a new Review
router.post('/', async (req, res) => {
    const { review } = req.body;
    try {
        const newReview = await Review.create({ review });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Review' });
    }
});

// Update a Review by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { review } = req.body;
    try {
        const updatedReview = await Review.update(
            { review },
            { where: { id }, returning: true }
        );
        if (updatedReview[0] === 0) {
            res.status(404).json({ error: 'Review not found' });
        } else {
            res.json(updatedReview[1][0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Review' });
    }
});

// Delete a Review by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReviewCount = await Review.destroy({ where: { id } });
        if (deletedReviewCount === 0) {
            res.status(404).json({ error: 'Review not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Review' });
    }
});

module.exports = router;