const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define build path for Express config
const publicDirectoryPath = path.join(__dirname, './', 'build');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running.`);
});
