require('dotenv').config();
require('express-async-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//middleware
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// Body Parser Middleware
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/users', require('./routes/users/user.route'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
