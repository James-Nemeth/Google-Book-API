export const fetchBooksByQuery = async (query, apiKey) => {
    if (query.trim() === "") {
      throw new Error("Must search for a value");
    }
  
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=20&key=${apiKey}`;
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const data = await response.json();
  
    if (!data.items || data.items.length === 0) {
      throw new Error("No books found");
    }
  
    return data.items.map((item) => ({
      id: item.id, 
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
  };
  