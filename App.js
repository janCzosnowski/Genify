// App.js

const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port number

// Set the static folder to serve the HTML, CSS, and JS files
app.use(express.static('public'));

// Define routes for landing page and pricing page
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.get('/pricing', (req, res) => {
  res.sendFile('pricing.html', { root: __dirname + '/public' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
