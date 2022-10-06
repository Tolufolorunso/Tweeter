const jwt = require('jsonwebtoken');

const { UnauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provide');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { email, username, id } = decoded;

    const user = await User.find({ username });

    console.log(21, user);

    req.user = { email, username, id };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
};

module.exports = authenticationMiddleware;
