const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: String, required: true, trim: true },
  image: { type: String }, // New field for storing image URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
