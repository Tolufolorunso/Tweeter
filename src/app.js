require('express-async-errors');

const express = require('express');
const path = require('path');
const morgan = require('morgan');

// security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
// const cloudinary = require('cloudinary').v2;

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Cloudinary v2
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

//middleware
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// Body Parser Middleware

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());

app.use(helmet());
app.use(cors());
app.use(xss());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// App Routes
app.use('/api/v1/auth', require('./routes/auth/auth.route'));
app.use('/api/v1/users', require('./routes/users/user.route'));
app.use(
  '/api/v1/tweets',
  // authenticateUser,
  require('./routes/tweet/tweet.route')
);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// APP ErrorHandler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
