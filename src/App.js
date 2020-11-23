import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

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
          <li>{book.volumeInfo.title}</li>
          <li>{book.volumeInfo.authors}</li>
          <li>{book.volumeInfo.categories}</li>
          <li>{book.volumeInfo.publishedDate}</li>
        </ul>
      );
    });
  };

  return (
    <div className="App">
      <h1>Search For a Book!</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="search for a book"
          onChange={renderChange}
        />
      </form>
      {getBooks()}
    </div>
  );
};

export default App;
