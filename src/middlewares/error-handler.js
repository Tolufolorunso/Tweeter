const { StatusCodes } = require('http-status-codes');

function errorHandlerMiddleware(err, req, res) {
  // console.log(4, err);
  let customError = {
    // set default
    errors: err.errors || undefined,
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong try again later',
  };
  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === 'CastError') {
    customError.message = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({
    status: false,
    message: customError.message,
    errors: customError.errors,
  });
}

module.exports = errorHandlerMiddleware;
