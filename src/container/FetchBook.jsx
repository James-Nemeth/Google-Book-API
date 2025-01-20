import { useEffect, useState } from "react";
import { fetchBooksByQuery } from "../services/book-services";
import BookList from "../component/BookList/BookList";
import BookModal from "../component/BookModal/BookModal";
import Loader from "../component/Loader/Loader";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const FetchBook = ({ query }) => {
  const [fetchStatus, setFetchStatus] = useState("IDLE");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      setFetchStatus("IDLE");
      return;
    }

    setFetchStatus("LOADING");
    fetchBooksByQuery(query, API_KEY)
      .then((bookData) => {
        setBooks(bookData);
        setFetchStatus("SUCCESS");
      })
      .catch((err) => {
        setError(err.message);
        setFetchStatus("FAILURE");
      });
  }, [query]);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div>
      {fetchStatus === "IDLE" && (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Please enter a Book Title
        </p>
      )}
      {fetchStatus === "LOADING" && <Loader />}
      {fetchStatus === "FAILURE" && (
        <p style={{ textAlign: "center" }}>{error}</p>
      )}
      {fetchStatus === "SUCCESS" && (
        <>
          <BookList books={books} openModal={openModal} />
          {isModalOpen && (
            <BookModal book={selectedBook} closeModal={closeModal} />
          )}
        </>
      )}
    </div>
  );
};

export default FetchBook;
