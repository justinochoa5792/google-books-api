import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import Nav from "./Nav";
import BookDetails from "./BookDetails";

const Home = () => {
  const [term, setTerm] = useState("");
  const [allBooks, setBooks] = useState([]);

  const renderChange = (e) => {
    setTerm(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${term}+inauthor:keyes&key=AIzaSyDQrGZWbHCzGriBuTa0SsxIm33J2vGpY24`
    );
    setBooks(response.data.items);
    console.log(response.data.items);
  };

  const getBooks = () => {
    return allBooks.map((book) => {
      return (
        <ul className="list">
          <Link to={`books/${book.id}`}>
            <BookDetails value={allBooks} />
          </Link>
        </ul>
      );
    });
  };

  return (
    <div>
      <Nav />
      <div className="home">
        <h1>Search For a Book!</h1>
        <form onSubmit={submitForm}>
          <input
            className="input"
            type="text"
            placeholder="search for a book"
            onChange={renderChange}
          />
        </form>
        {getBooks()}
      </div>
    </div>
  );
};

export default Home;
