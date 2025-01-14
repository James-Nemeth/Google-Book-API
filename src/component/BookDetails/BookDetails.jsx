import React from "react";
import classes from "./BookDetails.module.scss";
import BookCard from "../BookCard/BookCard";

const BookDetails = ({ title, authors, thumbnail }) => {
  return (
    <div className={classes.container}>
      <BookCard>
        <div className={classes.details}>
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

export default BookDetails;
