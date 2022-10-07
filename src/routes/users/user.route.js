const express = require('express');
const {
  updateUser,
  getUser,
  getAllUsers,
  getMe,
} = require('./user.controller');

const authenticateUser = require('../../middlewares/authentication');

const userRouter = express.Router();

userRouter.route('/:userID').get(authenticateUser, getUser).patch(updateUser);
userRouter.get('/', authenticateUser, getAllUsers);
userRouter.get('/profile/me', authenticateUser, getMe);

module.exports = userRouter;
