import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 1800,
  },
  genre: {
    type: String,
    default: "existentialism",
  },
  description: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  cover: {
    type: String,
    required: true,
  },
  __v: {
    type: Number,
    select: false,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
