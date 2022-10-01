const express = require('express');
const { register } = require('./user.controller');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', register);

module.exports = userRouter;
