import classes from "./Trendingbrands.module.css";
import trendingbrands from "../assets/TrendingBrands.svg";

const Trendingbrands = () => {
  return (
    <div className={classes.container}>
      <img src={trendingbrands} />
    </div>
  );
};

export default Trendingbrands;
