const { StatusCodes } = require('http-status-codes');

const User = require('../../models/user.model');
const { BadRequest, NotFoundError } = require('../../errors');

const getUser = async (req, res) => {
  const { userID } = req.params;

  const user = await User.findById(userID);

  if (!user) {
    throw new NotFoundError(`User with the ${userID}, doesn't exist`);
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

module.exports = {
  updateUser,
  getUser,
  getAllUsers,
};
