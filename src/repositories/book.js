const Book = require('../models/book');

function find(page, limit) {
  const skip = page > 0 ? (page - 1) * limit : 0;

  return Book.find().skip(skip).limit(limit).exec();
}

function count() {
  return Book.countDocuments().exec();
}

function findById(id) {
  return Book.findOne({ _id: id }).exec();
}

function create(payload) {
  return Book.create(payload);
}

function updateById(id, payload) {
  return Book.findOneAndReplace({ _id: id }, payload, { new: true }).exec();
}

function deleteById(id) {
  return Book.deleteOne({ _id: id }).exec();
}

module.exports = {
  find,
  count,
  findById,
  create,
  updateById,
  deleteById,
};
