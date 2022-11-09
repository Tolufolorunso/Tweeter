const { StatusCodes } = require("http-status-codes");
const findHashtags = require("find-hashtags");

const User = require("../../models/user.model");
const Hash = require("../../models/hashTag.model");
const Tweet = require("../../models/tweet.model");
const { BadRequestError, UnauthenticatedError } = require("../../errors");
const { findOne } = require("../../models/tweet.model");
const { findById } = require("../../models/user.model");
const { post } = require("./tweet.route");

const postTweet = async (req, res) => {
  // console.log(req.file);
  console.log(req.body);

  if (!req.file && !req.body.tweetText) {
    throw new BadRequestError("Upload atleast one image or enter tweet");
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

  let tweet = await Tweet.create({
    ...req.body,
    tweetImg: req.file?.filename,
  });

  // const t = Tweet.populate("userId")
  tweet = await Tweet.populate(tweet, { path: "userId" });

  res.status(StatusCodes.OK).json({
    status: true,
    message: "tweet successful",
    tweet,
  });
};

const getTweets = async (req, res) => {
  let { username } = req.params;
  const tweets = await Tweet.find({ username }).sort("-createdAt");
  res.status(StatusCodes.OK).json({
    status: true,
    message: "fetched successfully",
    tweets,
  });
};

const getTimeline = async (req, res) => {
  let { id } = req.user;
  const user = await User.findById(id);
  let tweets = await Tweet.find({ userId: user._id })
    .populate("userId")
    .populate("retweetData")
    .populate("replyTo")
    .sort("-createdAt");

  console.log(tweets);
  const followingTweets = await Promise.all(
    user.following.map((friendId) => {
      return Tweet.find({ userId: friendId }).populate("userId");
    })
  );

  tweets = await User.populate(tweets, { path: "replyTo.userId" });
  tweets = await User.populate(tweets, { path: "retweetData.userId" });

  res.status(StatusCodes.OK).json({
    status: true,
    index: tweets.concat(...followingTweets).length,
    message: "fetched successfully",
    tweets: tweets.concat(...followingTweets),
  });
};

const setLike = async (req, res) => {
  const { id: userId } = req.user;
  const { tweetId } = req.params;

  let user = await User.findById(userId);

  const isLiked = user.likes && user.likes.includes(tweetId);

  const option = isLiked ? "$pull" : "$addToSet";

  await User.findByIdAndUpdate(userId, { [option]: { likes: tweetId } });
  const tweets = await Tweet.findByIdAndUpdate(
    tweetId,
    { [option]: { likes: userId } },
    { new: true }
  ).populate('userId');

  res.status(StatusCodes.OK).json({
    status: true,
    message: "fetched successfully",
    tweets,
  });
};

const setRetweet = async (req, res) => {
  const { id: userId } = req.user;
  const { tweetId } = req.params;

  let deletedTweet = await Tweet.findOneAndDelete({
    userId,
    retweetData: tweetId,
  });
  const option = deletedTweet != null ? "$pull" : "$addToSet";

  let retweet = deletedTweet;

  if (retweet == null) {
    retweet = await Tweet.create({ userId, retweetData: tweetId });
  }

  await User.findByIdAndUpdate(
    userId,
    { [option]: { retweets: retweet._id } },
    { new: true }
  );

  const tweets = await Tweet.findByIdAndUpdate(
    tweetId,
    { [option]: { retweetUser: userId } },
    { new: true }
  ).populate('userId');

  res.status(StatusCodes.OK).json({
    status: true,
    message: "retweeted",
    tweets,
  });
};

const saveTweet = async (req, res) => {
  const { id } = req.user;
  const { tweetId } = req.params;

  let user = await User.findById(id);

  const isSaved = user.savedTweet && user.savedTweet.includes(tweetId);
  const option = isSaved ? "$pull" : "$addToSet";

 let savedTweets =await User.findByIdAndUpdate(id, { [option]: { savedTweet: tweetId } }, {new: true}).populate('savedTweet');
//  savedTweets = User.populate(user, { path: "user.savedTweet" })

  console.log(savedTweets)
  if (isSaved) {
    res.status(StatusCodes.OK).json({
      status: true,
      message: "Tweet unsaved",
      tweets: user.savedTweet
    });
  } else {
    res.status(StatusCodes.OK).json({
      status: true,
      message: "Tweet saved",
      tweets: user.savedTweet
    });
  }
};

const getBookmarks = async (req, res) => {
  const { id } = req.user;

  let user = await User.findById(id).populate('savedTweet');
  
  res.status(StatusCodes.OK).json({
    status: true,
    message: "bookmarks",
    tweets: user.savedTweet
  });
};

module.exports = {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
  saveTweet,
  getTimeline,
  getBookmarks
};
