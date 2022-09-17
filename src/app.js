const express = require('express');
const path = require('path');

const app = express();

//middleware
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

// Body Parser Middleware
app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
