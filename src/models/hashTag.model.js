const mongoose = require('mongoose');

const HashtagSchema = new mongoose.Schema({
  tag: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model('Hash', HashtagSchema);
