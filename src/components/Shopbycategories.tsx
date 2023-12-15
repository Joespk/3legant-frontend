import classes from "./Shopbycategories.module.css";
import puffers from "../assets/Categories/puffers.svg";
import bombers from "../assets/Categories/Bombers.svg";
import lightweight from "../assets/Categories/Lightweightjackets.svg";
import gilets from "../assets/Categories/Gilets.svg";
import coats from "../assets/Categories/Coats.svg";
import rainwear from "../assets/Categories/Rainwear.svg";

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
          <img className={classes.roundimage} src={bombers} />
          <p>Bombers</p>
        </div>
        <div>
          <img className={classes.roundimage} src={lightweight} />
          <p>Lightweight jackets</p>
        </div>
        <div>
          <img className={classes.roundimage} src={gilets} />
          <p>Gilets</p>
        </div>
        <div>
          <img className={classes.roundimage} src={coats} />
          <p>Coats</p>
        </div>
        <div>
          <img className={classes.roundimage} src={rainwear} />
          <p>Rainwear</p>
        </div>
      </div>
    </div>
  );
};

export default Shopbycategories;
