const fs = require('fs');

const data = 'Mongo, Express, Angular, Node';

const filePath = 'src.txt';

fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data has been written to src.txt successfully.');
    }
});
