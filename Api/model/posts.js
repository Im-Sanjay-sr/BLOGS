const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  imageUrl: { type: String, required: true},
  date: {type: String, required: true},
  comment: {type: Number, default:0},
});

const Blog = mongoose.model("posts", blogSchema);

module.exports = Blog;
