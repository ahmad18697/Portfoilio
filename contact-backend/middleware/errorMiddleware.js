const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.message.includes('Invalid login')) {
    return res.status(500).json({ error: 'Email service authentication failed' });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;