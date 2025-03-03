const express = require('express');
const route = require('./route');

const app = express();

// Use the route middleware
app.use('/', route);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
