const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name required'],
      minlength: 3,
      maxlength: 100,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: [true, 'Username required'],
      minlength: 3,
      maxlength: 100,
      trim: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      validate: {
        validator: validator.isMobilePhone,
        message: (props) => `${props.value} is not a valid phone!`,
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password required'],
      minlength: 3,
      select: false,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Date of birth required'],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    savedTweet: {
      type: Array,
      default: [],
    },
    userImg: {
      type: String,
      default:
        'https://res.cloudinary.com/tolufolorunso/image/upload/v1664848329/tweeter/blank-profile-picture-gc8eaa7382_640.png',
    },
    coverImg: {
      type: String,
    },
    bio: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (candiatePassword) {
  return await bcrypt.compare(candiatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
