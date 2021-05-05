import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UpdateBook } from '../update-form/update-from';
import "./bookDetails.css";

export function BookDetails({ 
    getBookDetails ,
    handleSubmit,
    userTitle,
    userAuthor,
    userGenre,
    userDesc,
    updateBook,
    userYear
     }) {
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (params && params.id) {
      getBookDetails(params.id, setDetails);
    }
  }, [getBookDetails, params]);

  return Object.keys(details).length > 0 ? (
    <main className="book-details">
    <div className="back-btn-section">
        <Link to='/' target="_self" className="back-btn">Home Page</Link>
    </div>
      <div className="book-section">
        <section className="book-cover">
          <img
            src={`http://127.0.0.1:4050/${details.cover}`}
            alt="book-cover-id"
            className="book-cover-id"
          />
        </section>
        <section className="book-text-fields">
          <div className="book-name-det">
            <p>Title: </p>
            <p>{details.name}</p>
          </div>
          <div className="book-author-det">
            <p>Author: </p>
            <p>{details.author}</p>
          </div>
          <div className="book-year-det">
            <p>Year: </p>
            <p>{details.year}</p>
          </div>
          <div className="book-genre-det">
            <p>Genre: </p>
            <p>{details.genre}</p>
          </div>
          <div className="book-description">
            <p>Description: </p>
            <p>{details.description}</p>
          </div>
        </section>
      </div>
      <div className='update-section'>
        <UpdateBook 
            handleSubmit ={handleSubmit}
            userTitle = {userTitle}
            userAuthor = { userAuthor}
            userGenre = { userGenre}
            userDesc = { userDesc}
            updateBook = { updateBook}
            userYear={userYear}
        />
      </div>
    </main>
  ) : (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  );
}
