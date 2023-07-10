const express = require('express');
const app = express();
const movies = [
  { id: 1, title: 'Movie 1', description: 'This is movie 1.' },
  { id: 2, title: 'Movie 2', description: 'This is movie 2.' },
  { id: 3, title: 'Movie 3', description: 'This is movie 3.' },
];

// List all movies
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Get a specific movie by ID
app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(movie => movie.id === id);
  
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
