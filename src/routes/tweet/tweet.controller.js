const { StatusCodes } = require('http-status-codes');
const findHashtags = require('find-hashtags');

const User = require('../../models/user.model');
const Hash = require('../../models/hashTag.model');
const Tweet = require('../../models/tweet.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { findOne } = require('../../models/tweet.model');

const postTweet = async (req, res) => {
  // console.log(req.file);
  // console.log(req.body.tweetText, 11);

  if (!req.file && !req.body.tweetText) {
    throw new BadRequestError('Upload atleast one image or enter tweet');
  }

  // let getHashTags = findHashtags(req.body.tweetText);

  // let hashTags = await Hash.find({});

  // console.log(hashTags.countDocument);

  // hashTags = [...hashTags, ...getHashTags];
  // console.log(22, hashTags);
  // await hashTags.save({
  //   validateBeforeSave: false,
  // });

  const tweet = await Tweet.create({ ...req.body, tweetImg: req.file?.path });

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'tweet successful',
    tweet,
  });
};

const getTweets = async (req, res) => {
  let { username } = req.params;
  const tweets = await Tweet.find({ username }).sort('-createdAt');
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    tweets,
  });
};

const getTimeline = async (req, res) => {
  let userId = req.user;
  const tweets = await Tweet.find({ userId }).sort('-createdAt');
  // const followersTweets = Promise.all([])
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    tweets,
  });
};

const setLike = async (req, res) => {
  const { username } = req.user;
  const { tweetId } = req.params;

  const like = await Tweet.updateOne(
    { _id: tweetId },
    { $push: { likes: username } }
  );

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    like,
  });
};

const setUnLike = async (req, res) => {
  const { username } = req.user;
  const { tweetId } = req.params;

  const unlike = await Tweet.updateOne(
    { _id: tweetId },
    { $pull: { likes: username } }
  );

  console.log(unlike);

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    unlike,
  });
};

const setRetweet = async (req, res) => {
  const { username } = req.user;
  const { tweetId } = req.params;

  const retweet = await Tweet.updateOne(
    { _id: tweetId },
    { $push: { retweet: username } }
  );

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'retweeted',
    retweet,
  });
};

const setUnRetweet = async (req, res) => {
  const { username } = req.user;
  const { tweetId } = req.params;
  console.log(username, tweetId);
  const retweet = await Tweet.updateOne(
    { _id: tweetId },
    { $pull: { retweet: username } }
  );

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'unretweeted',
    retweet,
  });
};

module.exports = {
  postTweet,
  getTweets,
  setLike,
  setUnLike,
  setRetweet,
  setUnRetweet,
};
