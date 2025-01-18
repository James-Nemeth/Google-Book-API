import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({ books }) => {
  return (
    <div className={classes.container}>
      {books.map((book, index) => (
        <BookCard key={index}>
          {book.thumbnail ? (
            <img
              src={book.thumbnail}
              alt={`Cover of ${book.title}`}
              className={classes.thumbnail}
            />
          ) : (
            <div className={classes.placeholder}>
              <span className={classes.coverText}>No Book Cover Available</span>
            </div>
          )}
          <h1 className={classes.title}>{book.title}</h1>
          <h2 className={classes.authors}>By: {book.authors.join(", ")}</h2>
        </BookCard>
      ))}
    </div>
  );
};

export default BookList;
