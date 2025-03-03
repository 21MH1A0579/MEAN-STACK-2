const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route handler for handling POST submissions
app.post('/submit', (req, res) => {
    const { title, content } = req.body;
    // Process the submitted data
    res.send('Submission received');
});

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
const port =4500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
