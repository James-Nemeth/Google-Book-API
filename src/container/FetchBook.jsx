import React, { useState, useEffect } from "react";
import BookDetails from "../component/BookDetails/BookDetails.jsx";
import BookCard from "../component/BookCard/BookCard.jsx";

const FetchBook = () => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=intitle:the+lord+of+the+rings"
        );
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
  }, []);

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
