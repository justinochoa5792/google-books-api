import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import "tachyons";

import Nav from "./component/Nav";

require("dotenv").config();

const App = () => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);

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
    return books.map((book) => {
      return (
        <ul key={book.accessInfo.id}>
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
          />
          <li>
            <strong>Name of the Book: </strong>
            {book.volumeInfo.title}
          </li>
          <li>
            <strong>Name of the Author: </strong>
            {book.volumeInfo.authors}
          </li>
          <li>
            <strong>Categories: </strong>
            {book.volumeInfo.categories}
          </li>
          <li>
            <strong>Date Published: </strong>
            {book.volumeInfo.publishedDate}
          </li>
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

export default App;
