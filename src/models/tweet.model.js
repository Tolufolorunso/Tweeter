const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema(
  {
    tweetText: {
      type: String,
      minlength: 3,
      maxlength: 120,
      trim: true,
    },
    tweetImg: {
      type: String,
    },
    userImg: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    retweet: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tweet', TweetSchema);
