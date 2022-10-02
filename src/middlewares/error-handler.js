const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (error, req, res, next) => {
  // console.log(error);

  let customError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || 'Something went wrong, try again later',
  };

  // if (error instanceof CustomAPIError) {
  //   return res.status(error.statusCode).json({
  //     status: false,
  //     message: error.message,
  //   });
  // }

  if (error.code && error.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      error.keyValue
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.name === 'ValidationError') {
    customError.message = Object.values(error.errors)
      .map((item) => {
        return item.message;
      })
      .join(',');

    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (error.name === 'CastError') {
    customError.message = `No item found with id: ${error.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  console.log(customError);

  return res.status(customError.statusCode).json({
    status: false,
    message: customError.message,
    // error,
  });

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //   status: false,
  //   message: 'Something went wrong',
  //   error,
  // });
};

module.exports = errorHandlerMiddleware;
