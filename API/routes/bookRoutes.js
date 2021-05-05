import express from "express";
const router = express.Router();
import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from "../controller/bookController.js";
// Upload images
import multer from "multer";
//Storage strategy
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// Filtering files
const fileFilter = (req, file, cb) => {
  file.mimetype === "image/jpeg" || file.mimetype === "image/png"
    ? cb(null, true)
    : cb(null, false);
};
const upload = multer({ storage, fileFilter });

// CRUD operations

router.route("/").get(getBooks).post(upload.single("cover"), addBook);

router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

export default router;
