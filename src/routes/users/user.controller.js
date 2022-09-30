const moment = require('moment');

const User = require('../../models/user.model');
const CustomError = require('../../errors');

const register = async (req, res) => {
  let { name, email, password, dateOfBirth } = req.body;
  dateOfBirth = moment('1995-12-25');

  const userExist = await User.findOne({ email });
  console.log(userExist);

  if (userExist) {
    throw new CustomError.BadRequestError('User already exist');
  }

  await User.create({ name, email, password, dateOfBirth });
  res.status(200).json(req.body);
};

module.exports = {
  register,
};
