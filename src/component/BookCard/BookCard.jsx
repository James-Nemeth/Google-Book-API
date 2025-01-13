import classes from "./BookCard.module.scss";

const BookCard = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default BookCard;
