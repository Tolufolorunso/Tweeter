const express = require('express');
const { StatusCodes } = require('http-status-codes');

const app = express();

//middleware
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.get('/', (req, res) => {
  res.status(StatusCodes).json({
    name: 'Tweeter',
    madeFor: 'devchallenge.io',
  });
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
