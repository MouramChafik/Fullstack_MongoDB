// routes/movies.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;   
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit;

    const movies = await Movie.find().skip(skip).limit(limit);
    const total = await Movie.countDocuments(); 

    res.json({ 
      movies,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Erreur dans /movies:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
