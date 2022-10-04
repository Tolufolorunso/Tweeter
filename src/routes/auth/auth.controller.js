// const moment = require('moment');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const User = require('../../models/user.model');
const { BadRequestError, UnauthenticatedError } = require('../../errors');
const { createJWT } = require('../../utils/jwt');
const { validateEmail, validateOnlyNumbers } = require('../../utils/loginType');

const register = async (req, res, next) => {
  console.log(req.body);
  let { email, username, phone, day, month, year } = req.body;
  dateOfBirth = new Date(`${year}-${month}-${day}`);
  // console.log(dateOfBirth);

  // Checking for either email or phone
  let emailOrPhoneExistObj = {};
  if (email) {
    emailOrPhoneExistObj.email = email;
    delete req.body.phone;
  }

  if (phone) {
    emailOrPhoneExistObj.phone = phone;
    delete req.body.email;
  }

  console.log(emailOrPhoneExistObj);

  const emailOrPhoneExist = await User.findOne(emailOrPhoneExistObj);
  const usernameExist = await User.findOne({ username });

  if (usernameExist || emailOrPhoneExist) {
    throw new BadRequestError('User already exist');
  }
  console.log(req.body);
  let user = await User.create({ ...req.body, dateOfBirth });

  const token = createJWT({
    email: user.email,
    username: user.username,
    id: user._id,
  });

  user = user.toObject();
  delete user.password;

  res.status(StatusCodes.CREATED).json({
    status: true,
    message: 'User created successfully',
    user,
    token,
  });
};

const login = async (req, res) => {
  const { loginValue, password } = req.body;
  const loginObj = {};

  console.log(loginValue);

  if (validateEmail(loginValue)) {
    loginObj.email = loginValue;
  } else if (validateOnlyNumbers(loginValue)) {
    loginObj.phone = loginValue;
  } else {
    loginObj.username = loginValue;
  }

  if (!loginValue || !password) {
    throw new BadRequestError('Enter all fields');
  }

  let user = await User.findOne(loginObj).select('+password');

  if (!user) {
    throw new UnauthenticatedError('invalid credentials');
  }

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
