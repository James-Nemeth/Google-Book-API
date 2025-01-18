import React, { useState } from "react";
import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";
import BookModal from "../BookModal/BookModal";

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className={classes.container}>
      {books.map((book, index) => (
        <BookCard key={index} onClick={() => openModal(book)}>
          {book.thumbnail ? (
            <img
              src={book.thumbnail}
              alt={`Cover of ${book.title}`}
              className={classes.thumbnail}
            />
          ) : (
            <div className={classes.placeholder}>
              <span className={classes.noCoverText}>
                No Book Cover Available
              </span>
            </div>
          )}
          <h1 className={classes.title}>{book.title}</h1>
          <h2 className={classes.authors}>By: {book.authors.join(", ")}</h2>
        </BookCard>
      ))}

      {selectedBook && (
        <BookModal book={selectedBook} closeModal={closeModal} />
      )}
    </div>
  );
};

export default BookList;
