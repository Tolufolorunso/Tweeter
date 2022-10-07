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

const authenticateUser = require('../../middlewares/authentication');

const {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
} = require('./tweet.controller');

const tweetRouter = express.Router();

tweetRouter.post('/', authenticateUser, upload.single('tweetImg'), postTweet);
tweetRouter.patch('/likes/:tweetId', authenticateUser, setLike);
tweetRouter.patch('/retweets/:tweetId', setRetweet);
tweetRouter.get('/', authenticateUser, getTweets);

module.exports = tweetRouter;
