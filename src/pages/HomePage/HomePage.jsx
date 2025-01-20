import { Link } from "react-router";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}>
        <h1 className={classes.title}>Google Books API Viewer</h1>
        <Link to="/books">
          <button className={classes.button}>Search Books</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
