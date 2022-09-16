function notFound(req, res) {
  res.status(404).json({
    status: false,
    errorMessage: 'Route not found',
  });
}

module.exports = notFound;
