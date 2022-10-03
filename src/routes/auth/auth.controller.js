const moment = require('moment');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const User = require('../../models/user.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { createJWT } = require('../../utils/jwt');

const register = async (req, res, next) => {
  let { email, dateOfBirth } = req.body;
  dateOfBirth = moment('1995-12-25');

  const userExist = await User.findOne({ email });

  // if (userExist) {
  //   throw new BadRequestError('User already exist');
  // }

  const user = await User.create({ ...req.body, dateOfBirth });

  const token = createJWT({
    email: user.email,
    username: user.username,
    id: user._id,
  });

  res.status(StatusCodes.CREATED).json({
    status: true,
    message: 'User created successfully',
    user,
    token,
  });
};

const login = async (req, res) => {
  console.log(req.body);
  const { email, password, username } = req.body;
  const loginObj = {};
  if (email) {
    loginObj.email = email;
  }

  if (username) {
    loginObj.username = username;
  }
  if ((!email && !username) || !password) {
    throw new BadRequestError('Enter all fields');
  }

  console.log(loginObj);

  let user = await User.findOne(loginObj).select('+password');

  if (!user) {
    throw new UnauthenticatedError('invalid credentials');
  }
  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('invalid credentials');
  }

  const token = createJWT({
    email: user.email,
    username: user.username,
    id: user._id,
  });

  user = user.toObject();
  delete user.password;

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'login successful',
    user,
    token,
  });
};

module.exports = {
  register,
  login,
};
