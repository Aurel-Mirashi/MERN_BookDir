import React from "react";
import "./search-box.css";

export const SearchBox = ({ handleSubmit, userQuery }) => {
  return (
    <section className="search-bar">
      <form className="search-form" onSubmit={handleSubmit}>
        <i className="search-icon fas fa-search"></i>
        <input type="search" placeholder="Search books" onChange={userQuery} />
      </form>
    </section>
  );
};
