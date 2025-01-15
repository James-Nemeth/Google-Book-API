import React, { useState, useEffect } from "react";
import BookDetails from "../component/BookDetails/BookDetails";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const FetchBook = ({ query }) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setBook(null);
      setError(null);

      const delayRequest = setTimeout(() => {
        const fetchBookData = async () => {
          const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&key=${API_KEY}`;
          console.log("Fetching URL: ", url);

          try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.items && data.items.length > 0) {
              const bookData = data.items[0].volumeInfo;
              setBook({
                title: bookData.title,
                authors: bookData.authors || ["Unknown Author"],
                thumbnail: bookData.imageLinks?.thumbnail || null,
              });
            } else {
              setError("No books found");
            }
          } catch (err) {
            setError("Failed to fetch data");
          }
        };

        fetchBookData();
      }, 1000); // 1 second delay to debounce

      return () => clearTimeout(delayRequest); // Cleanup on component unmount or query change
    }
  }, [query]); // Run effect when query changes

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <BookDetails
      title={book.title}
      authors={book.authors}
      thumbnail={book.thumbnail}
    />
  );
};

export default FetchBook;
