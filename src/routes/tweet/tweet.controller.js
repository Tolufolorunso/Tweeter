const { StatusCodes } = require('http-status-codes');
const findHashtags = require('find-hashtags');

const User = require('../../models/user.model');
const Hash = require('../../models/hashTag.model');
const Tweet = require('../../models/tweet.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');

const postTweet = async (req, res) => {
  // console.log(req.file);
  console.log(req.body.tweetText, 11);

  if (!req.file && !req.body.tweetText) {
    throw new BadRequestError('Upload atleast one image or enter tweet');
  }

  let getHashTags = findHashtags(req.body.tweetText);

  let hashTags = await Hash.find({});

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
  const tweets = await Tweet.find({});
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    tweets,
  });
};

const setLike = async (req, res) => {
  const { tweetId } = req.params;
  const { userId } = req.body;

  // const like = await Tweet.updateOne(
  //   { tweetId },
  //   { $push: { likes: req.body } }
  // );
  // console.log(tweetId, userId, like);

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
  });
};

const setRetweet = async (req, res) => {
  const { tweetId } = req.params;
  const retweet = await Tweet.updateOne(
    { tweetId },
    { $push: { retweet: req.body } }
  );
  console.log(tweetId, username, retweet);

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'retweeted',
    // retweet,
  });
};

module.exports = {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
};
