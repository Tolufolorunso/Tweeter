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
  saveTweet,
  getTimeline,
  getBookmarks,
  deleteTweet,
} = require('./tweet.controller');

const tweetRouter = express.Router();

tweetRouter.post('/', authenticateUser, upload.single('tweetImg'), postTweet);
tweetRouter.get('/timeline', authenticateUser, getTimeline);
tweetRouter.patch('/:tweetId/likes', authenticateUser, setLike);
tweetRouter.post('/:tweetId/retweets', authenticateUser, setRetweet);
tweetRouter.post('/:tweetId/save', authenticateUser, saveTweet);
tweetRouter.get('/:username/bookmarks', authenticateUser, getBookmarks);
tweetRouter.get('/:username', authenticateUser, getTweets);
tweetRouter.delete('/:tweetId', authenticateUser, deleteTweet);

module.exports = tweetRouter;
