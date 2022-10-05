const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'tweeter',
  },
});

const upload = multer({ storage: storage });

const {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
} = require('./tweet.controller');

const tweetRouter = express.Router();

tweetRouter.post('/', upload.single('tweetImg'), postTweet);
tweetRouter.patch('/likes/:tweetId', setLike);
tweetRouter.patch('/retweets/:tweetId', setRetweet);
tweetRouter.get('/', getTweets);

module.exports = tweetRouter;
