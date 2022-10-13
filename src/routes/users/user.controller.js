const { StatusCodes } = require('http-status-codes');
const User = require('../../models/user.model');

const {
  NotFoundError,
  UnauthenticatedError,
  BadRequestError,
} = require('../../errors');

const getUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username });

  if (!user) {
    throw new NotFoundError(`The username: "${username}", doesn't exist`);
  }

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'successful',
    user,
  });
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

const getAllUsers = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'getAllUsers' });
};

const getMe = async (req, res) => {
  const username = req.user?.username;
  const user = await User.findOne({ username });

  if (!user) {
    throw new UnauthenticatedError('User not found');
  }

  res
    .status(StatusCodes.OK)
    .json({ status: true, message: 'successful', user });
};

const follow = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;
  if (userId === id) {
    throw new BadRequestError(`You can not perform that operation`);
  }

  const user = await User.findById(userId);
  const currentUser = await User.findById(req.user.id);

  if (user.followers.includes(id)) {
    throw new BadRequestError(`you are already following the user`);
  }

  await user.updateOne({ $push: { followers: id } });
  await currentUser.updateOne({
    $push: { following: userId },
  });

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'followed',
    following: [...currentUser.following, userId],
  });
};

const unfollow = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;
  if (userId === id) {
    throw new BadRequestError(`You can not perform that operation`);
  }

  const user = await User.findById(userId);
  const currentUser = await User.findById(req.user.id);

  if (!user.followers.includes(id)) {
    throw new BadRequestError(`you are not following the user`);
  }

  await user.updateOne({ $pull: { followers: id } });
  await currentUser.updateOne({ $pull: { following: userId } });
  res.status(StatusCodes.OK).json({ message: 'unfollowed' });
};

module.exports = {
  updateUser,
  getUser,
  getAllUsers,
  getMe,
  follow,
  unfollow,
};
