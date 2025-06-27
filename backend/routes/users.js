// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;      
    const limit = parseInt(req.query.limit) || 10;   
    const skip = (page - 1) * limit;                  

    const users = await User.find().skip(skip).limit(limit);
    const total = await User.countDocuments();

    res.json({
      users,          
      total,          
      page,            
      pages: Math.ceil(total / limit)  
    });
  } catch (error) {
    console.error('Erreur dans /users:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
