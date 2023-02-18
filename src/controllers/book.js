const BookRepository = require('../repositories/book');

async function find(req, res, next) {
  const { page, limit } = req.query;

  try {
    const p1 = BookRepository.find(page, limit);
    const p2 = BookRepository.count();

    const [docs, totalCount] = await Promise.all([p1, p2]);

    return res.status(200).json({
      books: docs,
      meta: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalCount,
      },
    });
  } catch (error) {
    return next(error);
  }
}

async function findById(req, res, next) {
  const { id } = req.params;

  try {
    const doc = await BookRepository.findById(id);

    if (doc === null) {
      return res.status(404).end();
    }

    return res.status(200).json(doc);
  } catch (error) {
    return next(error);
  }
}

async function create(req, res, next) {
  const payload = {
    title: req.body.title,
    author: req.body.author,
  };

  try {
    await BookRepository.create(payload);

    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

async function updateById(req, res, next) {
  const { id } = req.params;

  const payload = {
    title: req.body.title,
    author: req.body.author,
  };

  try {
    const doc = await BookRepository.updateById(id, payload);

    if (doc === null) {
      return res.status(404).end();
    }

    return res.status(200).json(doc);
  } catch (error) {
    return next(error);
  }
}

async function deleteById(req, res, next) {
  const { id } = req.params;

  try {
    const result = await BookRepository.deleteById(id);

    if (result.deletedCount === 0) {
      return res.status(404).end();
    }

    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  find,
  findById,
  create,
  updateById,
  deleteById,
};
