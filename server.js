const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A simple in-memory array to store times
let times = [];

// Route to handle saving time entries
app.post('/save-time', (req, res) => {
    const entry = req.body;
    times.push(entry);
    
    // Optionally save to a file (to persist data after server restarts)
    fs.writeFileSync('times.json', JSON.stringify(times, null, 2));
    
    res.json({ message: 'Time saved successfully', entry });
});

// Route to fetch saved time entries
app.get('/get-times', (req, res) => {
    res.json(times);
});

// Optionally, load the times from a file if it exists (to persist data after server restarts)
if (fs.existsSync('times.json')) {
    times = JSON.parse(fs.readFileSync('times.json', 'utf-8'));
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
