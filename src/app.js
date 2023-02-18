const cors = require('cors');
const helmet = require('helmet');
const express = require('express');

const app = express();

app.use(cors());
app.use(helmet());

app.use(require('./routes'));

// eslint-disable-next-line no-unused-vars
app.use((__, res, ___) => {
  res.status(404).end('Not found');
});

// eslint-disable-next-line no-unused-vars
app.use((err, __, res, ___) => {
  res.status(err.status || 500).end(err.message || 'Internal Server Error');
});

module.exports = app;
