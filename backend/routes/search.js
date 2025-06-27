const express = require('express');
const router = express.Router();

// ⚠️ importe tes modèles Mongoose
const Movie = require('../models/movie');  // adapte le chemin
const User = require('../models/user');    // adapte le chemin

// GET /search?type=movies&q=at
router.get('/search', async (req, res) => {
    const { type, q } = req.query;

    if (!type || !q) {
        return res.status(400).json({ success: false, message: 'Type et q sont requis' });
    }

    try {
        let results = [];

        if (type === 'movies') {
            // Cherche par titre
            results = await Movie.find({ title: { $regex: `^${q}`, $options: 'i' } }).limit(10);
        } else if (type === 'users') {
            // Cherche par nom
            results = await User.find({ name: { $regex: `^${q}`, $options: 'i' } }).limit(10);
        } else {
            return res.status(400).json({ success: false, message: 'Type invalide' });
        }

        res.json({ success: true, results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
});

module.exports = router;
