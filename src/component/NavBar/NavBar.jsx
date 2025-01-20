import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.link_active}` : classes.link;

  return (
    <nav className={classes.nav} data-testid="navbar">
      <div>
        <h3 data-testid="navbar-title">Google Books API</h3>
      </div>
      <div>
        <NavLink className={linkStyles} to="/" data-testid="home-link">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/books" data-testid="books-link">
          Books
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
