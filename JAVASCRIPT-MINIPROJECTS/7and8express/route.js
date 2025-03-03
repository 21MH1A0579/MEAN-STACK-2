const express = require('express');
const router = express.Router();

// Define routes

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to AdventureTrails!');
});

// About route
router.get('/about', (req, res) => {
    res.send('About AdventureTrails');
});

// Route with parameter
router.get('/trail/:id', (req, res) => {
    const trailId = req.params.id;
    res.send(`Viewing trail ${trailId}`);
});

// Route with query parameter
router.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search results for query: ${query}`);
});

// Export the router
module.exports = router;
