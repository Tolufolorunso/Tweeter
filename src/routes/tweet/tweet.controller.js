const { StatusCodes } = require("http-status-codes");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const findHashtags = require("find-hashtags");

const User = require("../../models/user.model");
const Hash = require("../../models/hashTag.model");
const Tweet = require("../../models/tweet.model");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../../errors");
const { findById } = require("../../models/user.model");

const postTweet = async (req, res) => {
  if (!req.files && !req.body.tweetText) {
    throw new BadRequestError("Upload atleast one image or enter tweet");
  }

  let userImage;

  if (req.files) {
    userImage = req.files.tweetImg;
  }

  if (req.files && !userImage.mimetype.includes("image")) {
    throw new BadRequestError("Please upload a valid image");
  }

  // max upload is 2 megabytes
  const maxSize = 2000000;

  if (req.files && userImage.size > maxSize) {
    throw new BadRequestError("Exceeded allowed image max size");
  }
  let imagePath;
  let imageId = uuidv4();
  if (userImage) {
    imagePath = path.join(
      __dirname,
      "../../uploads/" + `${imageId}-${userImage.name}`
    );
    await userImage.mv(imagePath);
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
    tweetImg: userImage ? `uploads/${imageId}-${userImage.name}` : "",
  });

  if (req.body.replyTo) {
    await Tweet.findByIdAndUpdate(req.body.replyTo, {
      $push: { comments: tweet._id },
    });
  }

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
  // let tweets = await Tweet.find({ userId: user._id })
  //   .populate("userId")
  //   .populate("retweetData")
  //   .populate("replyTo")
  //   .populate("comments")
  //   .sort("-createdAt");

  // console.log(tweets);
  // const followingTweets = await Promise.all(
  //   user.following.map((friendId) => {
  //     return Tweet.find({ userId: friendId }).populate("userId");
  //   })
  // );

  let usersId = user.following;
  usersId.push(id);

  // console.log(usersId)

  let tweets = await Tweet.find({ userId: { $in: usersId } })
    .populate("userId")
    .populate("retweetData")
    .populate("replyTo")
    .populate("comments")
    .sort("-createdAt");

  tweets = await User.populate(tweets, { path: "replyTo.userId" });
  tweets = await User.populate(tweets, { path: "retweetData.userId" });
  // console.log(tweets)

  res.status(StatusCodes.OK).json({
    status: true,
    // index: tweets.concat(...followingTweets).length,
    // message: "fetched successfully",
    // tweets: tweets.concat(...followingTweets),
    tweets
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
  ).populate("userId");

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
  ).populate("userId");

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

  let savedTweets = await User.findByIdAndUpdate(
    id,
    { [option]: { savedTweet: tweetId } },
    { new: true }
  ).populate("savedTweet");
  const tweets = await Tweet.findByIdAndUpdate(
    tweetId,
    { [option]: { saved: id } },
    { new: true }
  ).populate("saved");
  //  savedTweets = User.populate(user, { path: "user.savedTweet" })

  console.log(savedTweets);
  if (isSaved) {
    res.status(StatusCodes.OK).json({
      status: true,
      message: "Tweet unsaved",
      tweets: user.savedTweet,
    });
  } else {
    res.status(StatusCodes.OK).json({
      status: true,
      message: "Tweet saved",
      tweets: user.savedTweet,
    });
  }
};

const getBookmarks = async (req, res) => {
  const { id } = req.user;

  let user = await User.findById(id).populate("savedTweet");

  res.status(StatusCodes.OK).json({
    status: true,
    message: "bookmarks",
    tweets: user.savedTweet,
  });
};

const deleteTweet = async (req, res) => {
  const { id } = req.user;
  const { tweetId } = req.params;

  const tweet = await Tweet.findById(tweetId);

  if (tweet === null) {
    throw new NotFoundError("Tweet not found. Nothing to delete");
  }

  if (id.toString() !== tweet.userId.toString()) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: false,
      message: "You dont have permission to delete the tweet",
    });
  }

  await Tweet.findByIdAndDelete(tweetId);

  res.status(StatusCodes.OK).json({
    status: true,
    message: "deleted",
  });
};

module.exports = {
  postTweet,
  getTweets,
  setLike,
  setRetweet,
  saveTweet,
  getTimeline,
  getBookmarks,
  deleteTweet,
};
