import placeholder from "../assets/ImagePlaceholder.svg";
import classes from "./Imageplaceholder.module.css";

const Imageplaceholder = () => {
  return (
    <div className={classes.container}>
      <img src={placeholder} className={classes.image}></img>
      <div className={classes.content}>
        <span className={classes.bring}>Bring the warmth.</span>
        <span className={classes.every}>
          Everyone needs a good winter jacket. Find yours with our collection
          and more.
        </span>
        <button className={classes.button}>Shopping Now</button>
      </div>
    </div>
  );
};

export default Imageplaceholder;
