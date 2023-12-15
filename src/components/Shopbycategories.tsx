import classes from "./Shopbycategories.module.css";
import puffers from "../assets/Categories/puffers.svg";

const Shopbycategories = () => {
  return (
    <div className={classes.container}>
      <h2>Shop by Categories</h2>
      <div className={classes.shopcategories}>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Puffers</p>
        </div>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Bombers</p>
        </div>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Lightweight jackets</p>
        </div>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Gilets</p>
        </div>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Coats</p>
        </div>
        <div>
          <img className={classes.roundimage} src={puffers} />
          <p>Rainwear</p>
        </div>
      </div>
    </div>
  );
};

export default Shopbycategories;
