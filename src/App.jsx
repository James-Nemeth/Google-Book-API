import { useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import FetchBook from "./container/FetchBook";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <FetchBook query={searchQuery} />
        <Footer />
      </div>
    </>
  );
}

export default App;
