const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const createJWT = ({ email, id, username }) => {
  // console.log(email, id, username);
  const token = jwt.sign({ id, email, username }, process.env.JWT_SECRET, {
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
