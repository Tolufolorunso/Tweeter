const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class UnauthorizedError extends CustomAPIError {
  constructor(message, errors) {
    super(message, errors);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
