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
      trim: true,
    },
    phone: {
      type: String,
      // validate: {
      //   validator: validator.isMobilePhone,
      //   message: (props) => `${props.value} is not a valid phone!`,
      // },
      trim: true,
    },
    password: { type: String, required: [true, 'Password required'], minlength: 3, select: false, },
    dateOfBirth: { type: Date, required: [true, 'Date of birth required'], },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet', }],
    retweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet', }],
    followers: { type: Array, default: [], },
    following: { type: Array, default: [], },
    savedTweet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
    userImg: { type: String, default: null, },
    coverImg: { type: String, default: null, },
    isAdmin: { type: Boolean, default: false, },
    bio: { type: String, default: '', },
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
