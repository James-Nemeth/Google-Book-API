import classes from "./BookModal.module.scss";

const BookModal = ({ book, closeModal }) => {
  if (!book) return null;

  return (
    <div className={classes.modalOverlay} onClick={closeModal}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2 className={classes.modalTitle}>{book.title}</h2>
        {book.thumbnail && (
          <img
            src={book.thumbnail}
            alt={`Cover of ${book.title}`}
            className={classes.modalThumbnail}
          />
        )}
        <p className={classes.modalAuthors}>By: {book.authors.join(", ")}</p>
        <p className={classes.modalDescription}>
          <strong>Description: </strong>
          {book.description || "No description available."}
        </p>
        <p className={classes.modalPublisher}>
          <strong>Publisher: </strong>
          {book.publisher}
        </p>
        <p className={classes.modalDate}>
          <strong>Date:</strong> {book.publishedDate}
        </p>
        <p className={classes.modalPageCount}>
          <strong>Page Count:</strong> {book.pageCount}
        </p>
        <p className={classes.modalCategories}>
          <strong>Categories:</strong> {book.categories.join(", ")}
        </p>
        <p className={classes.modalRating}>
          <strong>Rating:</strong> {book.averageRating || "No rating available"}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
