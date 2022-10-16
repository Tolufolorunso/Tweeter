const express = require('express');
const {
  updateUser,
  getUser,
  getAllUsers,
  getMe,
  follow,
  unfollow,
  saveTweet,
} = require('./user.controller');

const authenticateUser = require('../../middlewares/authentication');

const userRouter = express.Router();

userRouter.route('/:username').get(authenticateUser, getUser).patch(updateUser);
userRouter.patch('/:userId/follow', authenticateUser, follow);
userRouter.patch('/:userId/unfollow', authenticateUser, unfollow);
userRouter.patch('/:tweetId/savetweet', authenticateUser, saveTweet);
userRouter.get('/', authenticateUser, getAllUsers);
userRouter.get('/profile/me', authenticateUser, getMe);

module.exports = userRouter;
