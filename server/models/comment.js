const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
const CommentsSchema = new Schema({
  text: { type: String, required: true },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  hidden: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentsSchema);