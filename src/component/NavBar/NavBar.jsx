import { NavLink } from "react-router";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.link_active}` : classes.link;

  return (
    <nav className={classes.nav}>
      <div>
        <h3>Google Books API</h3>
      </div>
      <div>
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/books">
          Books
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
