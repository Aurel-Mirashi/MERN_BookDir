import React from "react";
import "./card.css";

import { ReactComponent as DeleteIcon } from "../../utils/close-red.svg";
import { useHistory } from "react-router-dom";

export function Card({ id, name, author, genre, year, cover, deleteBook }) {
  const history = useHistory();
  return (
    <div className="card">
      <section className="icon-bar">
        <div className="info-btn">
          <button
            className="btn-success"
            onClick={() => history.push(`/book/${id}`)}>
            More info
          </button>
        </div>
        <div className="delete-icon">
          <DeleteIcon
            alt="delete-book"
            className="delete-book"
            onClick={() => deleteBook(id)}
          />
        </div>
      </section>
      <section className="img-container">
        <img src={`http://127.0.0.1:4050/${cover}`} alt="book-cover" />
      </section>
      <main className="book-credentials">
        <div className="book-name">
          <p>Title : </p>
          <p>{name}</p>
        </div>
        <div className="book-author">
          <p>Author : </p>
          <p>{author}</p>
        </div>
        <div className="book-year">
          <p>Year : </p>
          <p>{year}</p>
        </div>
        <div className="book-genre">
          <p>Genre : </p>
          <p>{genre}</p>
        </div>
      </main>
    </div>
  );
}
