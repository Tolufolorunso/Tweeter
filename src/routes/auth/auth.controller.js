// const moment = require('moment');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const User = require('../../models/user.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { createJWT } = require('../../utils/jwt');
const { validateEmail, validateOnlyNumbers } = require('../../utils/loginType');

const register = async (req, res, next) => {
  // console.log(11, req.body);
  let { email, username, phone, day, month, year } = req.body;
  dateOfBirth = new Date(`${year}-${month}-${day}`);
  // console.log(dateOfBirth);

  // Checking for either email or phone
  // let emailOrPhoneExistObj = {};
  // if (email) {
  //   emailOrPhoneExistObj.email = email;
  //   delete req.body.phone;
  // }

  // if (phone) {
  //   emailOrPhoneExistObj.phone = phone;
  //   delete req.body.email;
  // }

  // const userExists = await User.findOne({
  //   $or: [{ email }, { username }, { phone }],
  // });

  const userExists = await User.findOne({
    $or: [{ username }, { phone }],
  });

  console.log(userExists);

  // if (userExists.email === email) {
  //   throw new BadRequestError('email already exist');
  // } else if (userExists.phone === phone) {
  //   throw new BadRequestError('Phone already exist');
  // } else if (userExists.username === username) {
  //   throw new BadRequestError('Username already exist');
  // }

  let user = await User.create({ ...req.body, dateOfBirth });

  const token = createJWT({
    name: user.name,
    username: user.username,
    id: user._id,
  });

  user = user.toObject();
  // delete user.password;
  let { password, ...other } = user;

  res.status(StatusCodes.CREATED).json({
    status: true,
    message: 'User created successfully',
    user: other,
    token,
  });
};

const login = async (req, res) => {
  const { loginValue, password } = req.body;

  if (!loginValue || !password) {
    throw new BadRequestError('Enter all fields');
  }

  let user = await User.findOne({
    $or: [
      { email: loginValue },
      { username: loginValue },
      { phone: loginValue },
    ],
  }).select('+password');

  if (!user) {
    throw new UnauthenticatedError('invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('invalid credentials');
  }

  const token = createJWT({
    name: user.name,
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
