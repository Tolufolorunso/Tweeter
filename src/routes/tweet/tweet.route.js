const express = require('express');
const { postTweet } = require('./tweet.controller');

const tweetRouter = express.Router();

tweetRouter.post('/', postTweet);

module.exports = tweetRouter;
