import React from "react";

const BookDetails = (props) => {
  console.log(props);

  return (
    <div className="details">
      <h1>Book Details</h1>
      {props.value.map((bookDeets) => {
        return (
          <ul>
            <img
              src={bookDeets.volumeInfo.imageLinks.smallThumbnail}
              alt={bookDeets.volumeInfo.title}
            />
            <li>
              <strong>Name of the Book: </strong>
              {bookDeets.volumeInfo.title}
            </li>
            <li>
              <strong>Name of the Author: </strong>
              {bookDeets.volumeInfo.authors}
            </li>
            <li>
              <strong>Categories: </strong>
              {bookDeets.volumeInfo.categories}
            </li>
            <li>
              <strong>Date Published: </strong>
              {bookDeets.volumeInfo.publishedDate}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default BookDetails;
