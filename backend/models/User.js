const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  movies: [
    {
      movieid: String, 
      rating: Number,
    }
  ]
}, { collection: 'users' });
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;