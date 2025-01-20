import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.container}>
      <div data-testid="loader" className={classes.loader}></div>
    </div>
  );
};

export default Loader;
