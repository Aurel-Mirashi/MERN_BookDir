import React from "react";
import './add-book.css';

export const AddBook = ({
  handleSubmit,
  userTitle,
  userAuthor,
  userGenre,
  userYear,
  addBook,
  setFileUploaded,
}) => (
  <div className="wrapper">
    <form onSubmit={handleSubmit}>
      <div className="title">
        <label>Title :&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          placeholder="Enter book's title"
          name="name"
          autoComplete="off"
          onChange={userTitle}
        />
      </div>
      <div className="author">
        <label>Author :</label>
        <input
          type="text"
          placeholder="Enter book's author"
          name="author"
          autoComplete="off"
          onChange={userAuthor}
        />
      </div>
      <div className="genre">
        <label>Genre :</label>
        <input
          type="text"
          placeholder="Enter book's genre"
          name="genre"
          autoComplete="off"
          onChange={userGenre}
        />
      </div>
      <div className="year">
        <label>Year :&nbsp;&nbsp;&nbsp;</label>
        <input
          type="number"
          placeholder="Enter book's year"
          name="year"
          autoComplete="off"
          onChange={userYear}
        />
      </div>
      <div className="file-upload">
        <div><input type="file" name="file-upload" onChange={setFileUploaded} /></div>
      </div>
      <div className="btns">
        <div className="btn-submit">
          <button onClick={addBook}> Add book</button>
        </div>
        <div className="btn-reset">
          <input type="reset" value="Reset Fields" />
        </div>
      </div>
    </form>
  </div>
);
