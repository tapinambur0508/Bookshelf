const express = require('express');

const Schemas = require('./schemas');

const BookController = require('../../controllers/book');

const validate = require('../../middleware/validation');

const router = express.Router();

router.get('/', validate(Schemas.getBooks), BookController.find);
router.post('/', express.json(), validate(Schemas.createBook), BookController.create);

router.get('/:id', validate(Schemas.getBook), BookController.findById);
router.put('/:id', express.json(), validate(Schemas.updateBook), BookController.updateById);
router.delete('/:id', validate(Schemas.deleteBook), BookController.deleteById);

module.exports = router;
