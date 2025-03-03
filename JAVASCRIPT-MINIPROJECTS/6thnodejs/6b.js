const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js Web Server!</h1>');
});

const port = 3000; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
