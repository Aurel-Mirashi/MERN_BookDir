import React from "react";
import './card-container.css';
import { Card } from "../card/card";

export const CardContainer = ({ filteredBooks , deleteBook }) => (
  <section className="card-container">
    {filteredBooks.map(({ _id, name, author, genre, year, cover }) => (
      <Card
        key={_id}
        id={_id}
        name={name}
        author={author}
        genre={genre}
        year={year}
        cover={cover}
        deleteBook = {deleteBook}
      />
    ))}
  </section>
);
