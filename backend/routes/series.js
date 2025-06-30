const express = require("express");
const router = express.Router();
const Series = require("../models/serie");

router.get("/", async (req, res) => {
  const { page = 1, limit = 100 } = req.query;
  const series = await Series.find().limit(limit).skip((page - 1) * limit);
  res.json({ series });
});

module.exports = router;
