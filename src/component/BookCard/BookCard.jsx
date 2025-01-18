import classes from "./BookCard.module.scss";

const BookCard = ({ children, onClick }) => {
  return (
    <div className={classes.card} onClick={onClick}>
      {children}
    </div>
  );
};

export default BookCard;
