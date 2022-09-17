const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class BadRequestError extends CustomAPIError {
  constructor(message, errors) {
    console.log(6, message, errors);
    super(message, errors);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
