const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({
      status: false,
      message: error.message,
    });
  }
  return res.status(500).json({
    status: false,
    message: 'Something went wrong',
  });
};

module.exports = errorHandlerMiddleware;
