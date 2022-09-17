const CustomError = require('../errors');
const { isTokenValid } = require('../utils');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/user.models');
const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  try {
    const payload = await isTokenValid(token);
    const currentUser = await User.findById(payload.id);

    if (!currentUser) {
      throw new CustomError.UnauthenticatedError('The user doesnt exists');
    }
    if (currentUser.changedPasswordAfter(payload.iat)) {
      return next(
        new AppError('User recently changed password! please log in again', 401)
      );
    }
    req.user = currentUser;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

module.exports = authenticateUser;
