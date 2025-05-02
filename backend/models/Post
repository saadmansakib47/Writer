const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  excerpt: { type: String },
  content: { type: String, required: true },
  tags: [{ type: String }],
  thumbnail: { type: String }, // URL or filename of uploaded image
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
