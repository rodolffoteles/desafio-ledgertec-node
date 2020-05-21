const express = require('express');
require('express-async-errors');
const productRouter = require('./routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRouter);

// Error handler
app.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'production'){
    return res.status(500).end();
  } else {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = app;