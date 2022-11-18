const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user.model");
const Tweet = require("../../models/tweet.model");

const {
  NotFoundError,
  UnauthenticatedError,
  BadRequestError,
} = require("../../errors");

const getUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username });

  if (!user) {
    throw new NotFoundError(`The username: "${username}", doesn't exist`);
  }

  res.status(StatusCodes.OK).json({
    status: true,
    message: "successful",
    user,
  });
};

const updateUser = async (req, res) => {
  const { phone, name, bio, email } = req.body;
  if (req.user.username !== req.params.username) {
    throw new UnauthenticatedError("You don't have permission to do that");
  }

  if (!name) {
    throw new BadRequestError(`Name field is required`);
  }

  // const emailExists = await User.findOne({ email });
  // if (emailExists)
  //   throw new UnauthenticatedError('Email exists, try another one');

  let data = {
    phone,
    name,
    bio,
    email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, data, {
    runValidators: true,
    new: true,
  });

  res.status(StatusCodes.OK).json({
    status: true,
    message: "Updated successfully",
    user,
  });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res
    .status(StatusCodes.OK)
    .json({ status: true, message: "getAllUsers", users });
};

const getMe = async (req, res) => {
  const username = req.user?.username;
  const user = await User.findOne({ username });

  if (!user) {
    throw new UnauthenticatedError("User not found");
  }

  res
    .status(StatusCodes.OK)
    .json({ status: true, message: "successful", user });
};

const follow = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;
  if (userId === id) {
    throw new BadRequestError(`You can not perform that operation`);
  }

  const user = await User.findById(userId);

  if (user == null) {
    throw new NotFoundError("user not found");
  }

  const isFollowing = user.followers && user.followers.includes(id);

  const option = isFollowing ? "$pull" : "$addToSet";

  const self = await User.findByIdAndUpdate(
    id,
    { [option]: { following: userId } },
    { new: true }
  );

  await User.findByIdAndUpdate(userId, { [option]: { followers: id } });
  res.status(StatusCodes.OK).json({
    status: true,
    message: "followed",
    following: self.following,
    user: self,
  });
};

// const unfollow = async (req, res) => {
//   const { userId } = req.params;
//   const { id } = req.user;
//   if (userId === id) {
//     throw new BadRequestError(`You can not perform that operation`);
//   }

//   const user = await User.findById(userId);
//   const currentUser = await User.findById(req.user.id);

//   if (!user.followers.includes(id)) {
//     throw new BadRequestError(`you are not following the user`);
//   }

//   await user.updateOne({ $pull: { followers: id } });
//   await currentUser.updateOne({ $pull: { following: userId } });

//   res.status(StatusCodes.OK).json({
//     status: true,
//     following: currentUser.following.filter((f) => f !== userId),
//     message: 'unfollowed',
//   });
// };

const saveTweet = async (req, res) => {
  const { tweetId } = req.params;
  const { id } = req.user;

  const tweet = await Tweet.findById(tweetId);

  console.log(tweetId, tweet);

  if (!tweet) {
    throw new NotFoundError(`Tweet not found`);
  }

  const user = await User.findById(id);

  if (user.savedTweet.includes(tweetId)) {
    throw new BadRequestError(`Tweet saved already`);
  }

  await user.updateOne({ $push: { savedTweet: tweetId } });

  res.status(StatusCodes.OK).json({
    status: true,
    savedTweet: [...user.savedTweet, tweetId],
    message: "Tweet bookmarked",
  });
};

const unsavedTweet = async (req, res) => {
  const { tweetId } = req.params;
  const { id } = req.user;

  // if (!tweet) {
  //   throw new NotFoundError(`Tweet not found`);
  // }

  const user = await User.findById(id);

  // if (user.savedTweet.includes(tweetId)) {
  //   throw new BadRequestError(`Tweet saved already`);
  // }

  await user.updateOne({ $pull: { savedTweet: tweetId } });

  res.status(StatusCodes.OK).json({
    status: true,
    savedTweet: user.savedTweet.filter((f) => f !== tweetId),
    message: "Tweet unbookmarked",
  });
};

const loadFollowing = async (req, res) => {
  const {userId} = req.params
  const user = await User.findById(userId).populate('following')
  if(user === null) {
    throw new NotFoundError('User not found')
  }
  res.status(StatusCodes.OK).json({
    status: true,
    message: "Fetched following",
    following: user.following
  });
};

const loadFollowers = async (req, res) => {
  const {userId} = req.params
  const user = await User.findById(userId).populate('followers')
  if(user === null) {
    throw new NotFoundError('User not found')
  }
  res.status(StatusCodes.OK).json({
    status: true,
    message: "followers",
    followers: user.followers
  });
};

module.exports = {
  updateUser,
  getUser,
  getAllUsers,
  getMe,
  follow,
  // unfollow,
  saveTweet,
  unsavedTweet,
  loadFollowing,
  loadFollowers
};
