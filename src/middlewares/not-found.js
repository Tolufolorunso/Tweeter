const { StatusCodes } = require('http-status-codes');

const notFound = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: false,
    message: 'Route not found',
  });
};

module.exports = notFound;
