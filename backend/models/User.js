const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { collection: 'users' });

const userSchema = new mongoose.Schema({
  movies: [
    {
      movieid: String, // ou mongoose.Schema.Types.ObjectId si lié à Movie
      rating: Number,
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
