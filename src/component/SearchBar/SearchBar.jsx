import { useState } from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputText); // Log the value when the user clicks Search
    onSearch(inputText); // Trigger the search action
    setInputText(""); // Reset the input field
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <label className={classes.title} htmlFor="searchBar">
        What book are you looking for?
      </label>
      <input
        className={classes.input}
        type="text"
        id="searchbar"
        name="searchBar"
        value={inputText}
        onChange={onInputChange}
      />
      <button className={classes.btn} id="searchButton" name="searchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
