const { StatusCodes } = require('http-status-codes');

const User = require('../../models/user.model');
const Tweet = require('../../models/tweet.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');

const postTweet = async (req, res) => {
  console.log(req.file);
  console.log(req.body.tweetText);
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'tweet successful',
  });
};

module.exports = {
  postTweet,
};
