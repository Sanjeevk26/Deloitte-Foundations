const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// Middleware function for logging
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});
app.use(express.json());
// GET route
app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});


app.get('/api/users', (req, res) => {
      res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
      });


app.post('/api/data', (req, res) => {
        console.log(req.body);  // Parsed JSON data from request
        res.send('Data received');
        });
// Route with a parameter "id"
app.get('/users/:id', (req, res) => {
      const userId = req.params.id;
        res.send(`User ID is ${userId}`);
        });

// Route with multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
      const { userId, postId } = req.params;
        res.send(`User ID: ${userId}, Post ID: ${postId}`);
        });

// Route with query strings
app.get('/search', (req, res) => {
      const { q, page } = req.query; // Extract 'q' and 'page' from the query string
        res.send(`Search term: ${q}, Page: ${page}`);
        });

// POST route
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
