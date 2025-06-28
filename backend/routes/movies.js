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

router.post('/batch', async (req, res) => {
  const { ids } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ message: 'ids manquant ou vide' });
  }

  try {
    const numericIds = ids.map(id => Number(id));

    const movies = await Movie.find({ _id: { $in: numericIds } });
    res.json({ movies });
  } catch (error) {
    console.error('Erreur dans /movies/batch:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});



module.exports = router;
