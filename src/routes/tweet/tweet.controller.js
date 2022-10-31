const { StatusCodes } = require('http-status-codes');
const findHashtags = require('find-hashtags');

const User = require('../../models/user.model');
const Hash = require('../../models/hashTag.model');
const Tweet = require('../../models/tweet.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { findOne } = require('../../models/tweet.model');
const { findById } = require('../../models/user.model');

const postTweet = async (req, res) => {
  // console.log(req.file);
  // console.log(req.body);

  if (!req.file && !req.body.tweetText) {
    throw new BadRequestError('Upload atleast one image or enter tweet');
  }

  let getHashTags = findHashtags(req.body.tweetText);
  // console.log(getHashTags);
  let hashTags = await Hash.findOneAndUpdate({});

  // console.log(hashTags.countDocument);

  // hashTags = [...hashTags, ...getHashTags];
  // console.log(22, hashTags);
  // await hashTags.save({
  //   validateBeforeSave: false,
  // });

  const tweet = await Tweet.create({
    ...req.body,
    tweetImg: req.file?.filename,
  });

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
  let { id } = req.user;
  const user = await User.findById(id);
  const tweets = await Tweet.find({ userId: user._id })
    .populate('userId')
    .sort('-createdAt');

  const followingTweets = await Promise.all(
    user.following.map((friendId) => {
      return Tweet.find({ userId: friendId }).populate('userId');
    })
  );

  res.status(StatusCodes.OK).json({
    status: true,
    index: tweets.concat(...followingTweets).length,
    message: 'fetched successfully',
    tweets: tweets.concat(...followingTweets),
  });
};

const setLike = async (req, res) => {
  const { id: userId } = req.user;
  const { tweetId } = req.params;

  let user = await User.findById(userId)


  const isLiked = user.likes && user.likes.includes(tweetId)

  const option = isLiked ? '$pull' : '$addToSet'

  await User.findByIdAndUpdate(userId, { [option]: { likes: tweetId } })
  const tweets = await Tweet.findByIdAndUpdate(tweetId, { [option]: { likes: userId } }, { new: true })

  console.log(tweets)
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'fetched successfully',
    tweets
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
  setRetweet,
  setUnRetweet,
  getTimeline,
};
