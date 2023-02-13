const Joi = require('joi');

const BookSchema = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

module.exports = BookSchema;
