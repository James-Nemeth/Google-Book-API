import { useState } from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    onSearch(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <label className={classes.title} htmlFor="searchBar">
        What book are you looking for?
      </label>
      <input
        className={classes.input}
        type="text"
        id="searchBar"
        name="searchBar"
        data-testid="searchBar"
        value={inputText}
        onChange={onInputChange}
      />
      <button
        className={classes.btn}
        id="searchButton"
        name="searchButton"
        data-testid="searchButton"
        disabled={inputText < 0}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
