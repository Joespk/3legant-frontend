import classes from "./Imageplaceholder.module.css";

const Imageplaceholder = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.image}></div>
        <div className={classes.content}>
          <span className={classes.bring}>Bring the warmth.</span>
          <span className={classes.every}>
            Everyone needs a good winter jacket. Find yours with our collection
            and more.
            <button className={classes.button}>Shopping Now</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Imageplaceholder;
