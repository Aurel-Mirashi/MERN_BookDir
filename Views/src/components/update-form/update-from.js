import React from 'react';
import { useParams } from 'react-router-dom';
import './update-form.css';

export function UpdateBook({
    handleSubmit,
    userTitle,
    userAuthor,
    userGenre,
    userDesc,
    updateBook,
    userYear
  }) {
      const params = useParams();
      return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>Title :&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            placeholder="Update book's title"
            name="name"
            autoComplete="off"
            onChange={userTitle}
          />
        </div>
        <div className="author">
          <label>Author :</label>
          <input
            type="text"
            placeholder="Update book's author"
            name="author"
            autoComplete="off"
            onChange={userAuthor}
          />
        </div>
        <div className="genre">
          <label>Genre :</label>
          <input
            type="text"
            placeholder="Update book's genre"
            name="genre"
            autoComplete="off"
            onChange={userGenre}
          />
        </div>
        <div className="genre">
          <label>Year :</label>
          <input
            type="number"
            placeholder="Update book's year"
            name="year"
            autoComplete="off"
            onChange={userYear}
          />
        </div>
        <div className="desc">
          <label>Desc :</label>
          <textarea
            placeholder="Update book's description"
            name="desc"
            autoComplete="off"
            onChange={userDesc}
          />
        </div>
        <div className="btns">
          <div className="btn-submit">
               <button onClick = { () => {updateBook(params.id); 
               alert('Please wait until updated fields are being processed')}}> Update book</button>     
          </div>
          <div className="btn-reset">
            <input type="reset" value="Reset Fields" />
          </div>
        </div>
      </form>
    </div>
  )}