const jwt = require('jsonwebtoken');
const { invalid } = require('moment/moment');

const { UnauthenticatedError } = require('../errors');
const userModel = require('../models/user.model');
const { isTokenValid } = require('../utils/jwt');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provide');
  }

  const token = authHeader.split(' ')[1];
  console.log(token);
  try {
    const decoded = await isTokenValid(token);
    const { username, name } = decoded;

    const currentUser = await userModel.findOne({ username });
    console.log(currentUser);

    if (!currentUser) {
      throw new UnauthenticatedError("The user doesn't exists");
    }
    req.user = { name, username };
    next();
  } catch (error) {
    // console.log(29, error.message);
    if (error.message === 'jwt malformed') {
      throw new UnauthenticatedError('Invalid login.try to login again');
    }
    throw new UnauthenticatedError(error.message);
  }
};

module.exports = authenticationMiddleware;
