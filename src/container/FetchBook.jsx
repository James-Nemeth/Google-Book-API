import React, { useState, useEffect } from "react";
import BookList from "../component/BookList/BookList";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const FetchBook = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setBooks([]);
      setLoading(true); // Set loading to true when a search starts
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
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors || ["Unknown Author"],
                thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
              }));

              setBooks(bookData);
            } else {
              setError("No books found");
            }
          } catch (err) {
            setError("Failed to fetch data");
          } finally {
            setLoading(false); // Set loading to false once data is fetched
          }
        };

        fetchBookData();
      }, 1000);

      return () => clearTimeout(delayRequest);
    }
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!query) {
    return null; // Don't show anything when there's no query
  }

  if (books.length === 0) {
    return <p>No books found</p>;
  }

  return <BookList books={books} />;
};

export default FetchBook;
