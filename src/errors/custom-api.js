class CustomAPIError extends Error {
  constructor(message, errors = undefined) {
    super(message);
    this.errors = errors;
  }
}

module.exports = CustomAPIError;
