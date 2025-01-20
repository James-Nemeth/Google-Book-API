import classes from "./BookModal.module.scss";

const BookModal = ({ book, closeModal }) => {
  if (!book) return;

  return (
    <div className={classes.overlay} onClick={closeModal}>
      <div className={classes.content}>
        <button className={classes.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2 className={classes.title}>{book.title}</h2>
        {book.thumbnail && (
          <img
            src={book.thumbnail}
            alt={`Cover of ${book.title}`}
            className={classes.modalThumbnail}
          />
        )}
        <p className={classes.author}>By: {book.authors.join(" ")}</p>
        <p className={classes.details}>
          <strong>Description: </strong>
          {book.description || "No description available."}
        </p>
        <p className={classes.details}>
          <strong>Publisher: </strong>
          {book.publisher || "No publisher available."}
        </p>
        <p className={classes.details}>
          <strong>Date:</strong> {book.publishedDate || "No date available."}
        </p>
        <p className={classes.details}>
          <strong>Page Count:</strong>{" "}
          {book.pageCount || "No page count available."}
        </p>
        <p className={classes.details}>
          <strong>Categories:</strong>{" "}
          {book.categories.join(" ") || "No category available."}
        </p>
        <p className={classes.details}>
          <strong>Rating:</strong> {book.averageRating || "No rating available"}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
