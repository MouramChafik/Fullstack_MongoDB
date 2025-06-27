const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  movies: [
    {
      movieid: String, // ou mongoose.Schema.Types.ObjectId si lié à Movie
      rating: Number,
    }
  ]
}, { collection: 'users' });
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;