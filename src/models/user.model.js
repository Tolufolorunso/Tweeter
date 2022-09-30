const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 100,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: [true, 'Email required'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide email'],
    minlength: 3,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please provide email'],
  },
});

module.exports = mongoose.model('User', UserSchema);
