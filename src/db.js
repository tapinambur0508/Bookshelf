const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/bookshelf';

mongoose
  .connect(DB_URI)
  .then(() => console.info('Database connection success'))
  .catch((err) => console.error('Database connection error:', err));
