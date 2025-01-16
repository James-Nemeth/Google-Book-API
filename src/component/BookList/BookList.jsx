import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({ title, authors, thumbnail }) => {
  return (
    <div className={classes.container}>
      <BookCard>
        <div>
          {thumbnail && (
            <img
              src={thumbnail}
              alt={`Cover of ${title}`}
              className={classes.thumbnail}
            />
          )}
          <h1 className={classes.title}>{title}</h1>
          <h2 className={classes.authors}>By: {authors.join(", ")}</h2>
        </div>
      </BookCard>
    </div>
  );
};

export default BookList;
