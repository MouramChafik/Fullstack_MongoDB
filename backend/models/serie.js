const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  poster: String,
  year: Number,
  seasons: Number,
  status: String,
  synopsis: String,
});

module.exports = mongoose.model("Series", seriesSchema);
