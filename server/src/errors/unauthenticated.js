const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class UnauthenticatedError extends CustomAPIError {
  constructor(message, errors) {
    super(message, errors);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
