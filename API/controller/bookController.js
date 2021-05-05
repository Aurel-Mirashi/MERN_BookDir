import Book from "../Model/model.js";

export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: "success",
      length: books.length,
      data: books,
    });
  } catch (err) {
    res.status(409).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success",
      length: book.length,
      data: book,
    });
  } catch (err) {
    res.status(409).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const addBook = async (req, res, next) => {
  try {
    const newBook = await Book.create({
      name: req.body.name,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
      cover: req.file.path,
    });
    res.status(201).json({
      status: "success",
      data: newBook,
    });
  } catch (error) {
    res.status(409).json({
      error: error.message,
    });
  }
};
export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      length: book.length,
      data: book,
    });
  } catch (err) {
    res.status(409).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(409).json({
      status: "failed",
      message: err.message,
    });
  }
};
