import React, { useState, useEffect } from "react";
import BookList from "../component/BookList/BookList.jsx";
import BookModal from "../component/BookModal/BookModal"; // Import the BookModal component
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const FetchBook = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); // Track the selected book
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if modal is open

  useEffect(() => {
    if (query) {
      setBooks([]);
      setLoading(true);
      setError(null);

      const delayRequest = setTimeout(() => {
        const fetchBookData = async () => {
          const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=20&key=${API_KEY}`;
          console.log("Fetching URL: ", url);

          try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.items && data.items.length > 0) {
              const bookData = data.items.slice(0, 20).map((item) => ({
                id: item.id, // Add the book id to uniquely identify each book
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors || ["Unknown Author"],
                thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
                description: item.volumeInfo.description,
                publisher: item.volumeInfo.publisher,
                publishedDate: item.volumeInfo.publishedDate,
                pageCount: item.volumeInfo.pageCount,
                categories: item.volumeInfo.categories || [],
                averageRating: item.volumeInfo.averageRating,
              }));

              setBooks(bookData);
            } else {
              setError("No books found");
            }
          } catch (err) {
            setError("Failed to fetch data");
          } finally {
            setLoading(false);
          }
        };

        fetchBookData();
      }, 1000);

      return () => clearTimeout(delayRequest);
    }
  }, [query]);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!query) {
    return null;
  }

  if (books.length === 0) {
    return <p>No books found</p>;
  }

  return (
    <div>
      <BookList books={books} openModal={openModal} />
      {isModalOpen && <BookModal book={selectedBook} closeModal={closeModal} />}
    </div>
  );
};

export default FetchBook;
