const express = require('express');
const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'tweeter',
//   },
// });

// const upload = multer({ storage: storage });

const authenticateUser = require('../../middlewares/authentication');
const upload = require('../../utils/upload');

const {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
  setUnLike,
  setUnRetweet,
  getTimeline,
} = require('./tweet.controller');

const tweetRouter = express.Router();

tweetRouter.post('/', authenticateUser, upload.single('tweetImg'), postTweet);
tweetRouter.get('/timeline', authenticateUser, getTimeline);
tweetRouter.patch('/likes/:tweetId', authenticateUser, setLike);
tweetRouter.patch('/unlikes/:tweetId', authenticateUser, setUnLike);
tweetRouter.patch('/retweets/:tweetId', authenticateUser, setRetweet);
tweetRouter.patch('/unretweets/:tweetId', authenticateUser, setUnRetweet);
tweetRouter.get('/:username', authenticateUser, getTweets);

module.exports = tweetRouter;
