const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   _id: Number,
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number
    },
    critic: {
      rating: Number,
      numReviews: Number
    },
    lastUpdated: Date
  },
  num_mflix_comments: Number
}, { collection: 'movies' });

module.exports = mongoose.model('Movie', movieSchema);
