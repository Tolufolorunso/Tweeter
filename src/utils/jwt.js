const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const createJWT = ({ name, username, id }) => {
  console.log(name, username);
  const token = jwt.sign({ name, username, id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const isTokenValid = async (token) => {
  return await promisify(jwt.verify)(token, process.env.JWT_SECRET);
};

module.exports = {
  createJWT,
  isTokenValid,
};
