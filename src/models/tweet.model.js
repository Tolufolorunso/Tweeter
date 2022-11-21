const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
  {
    tweetText: {
      type: String,
      maxlength: 120,
      trim: true,
    },
    tweetImg: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replyBy: {
      type: String,
      default: "everyone",
    },
    pinned: {type: Boolean, default: false},
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
    retweetUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    retweetData: { type: mongoose.Schema.Types.ObjectId, ref: "Tweet" },
    replyTo: { type: mongoose.Schema.Types.ObjectId, ref: "Tweet" },
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);
