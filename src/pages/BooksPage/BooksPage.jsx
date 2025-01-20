import { useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import FetchBook from "../../container/FetchBook";

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <FetchBook query={searchQuery} />
    </div>
  );
};

export default BooksPage;
