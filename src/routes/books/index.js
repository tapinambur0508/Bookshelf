const express = require('express');

const Schemas = require('./schemas');

const BookService = require('../../controllers/book');

const validate = require('../../middleware/validation');

const router = express.Router();

router.get('/', validate(Schemas.getBooks), BookService.find);
router.post('/', express.json(), validate(Schemas.createBook), BookService.create);

router.get('/:id', validate(Schemas.getBook), BookService.findById);
router.put('/:id', express.json(), validate(Schemas.updateBook), BookService.updateById);
router.delete('/:id', validate(Schemas.deleteBook), BookService.deleteById);

module.exports = router;
