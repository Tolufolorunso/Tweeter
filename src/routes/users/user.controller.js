const moment = require('moment');

const User = require('../../models/user.model');
const { createCustomError } = require('../../errors/custom-error');

const register = async (req, res, next) => {
  let { name, email, password, dateOfBirth } = req.body;
  dateOfBirth = moment('1995-12-25');

  const userExist = await User.findOne({ email });
  console.log(userExist);

  if (userExist) {
    return next(createCustomError('User already exist', 400));
    // throw new CustomError.BadRequestError('User already exist');
  }

  await User.create({ name, email, password, dateOfBirth });
  res.status(StatusCodes.CREATED).json({
    status: true,
    message: `User created successfully`,
  });
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

const getUser = async (req, res) => {
  res.send('getUser');
};

const getAllUsers = async (req, res) => {
  res.send('getAllUsers');
};

module.exports = {
  register,
  login,
  updateUser,
  getUser,
  getAllUsers,
};
