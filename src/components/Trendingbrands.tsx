import classes from "./Trendingbrands.module.css";
import trendingbrands from "../assets/TrendingBrands.svg";
import logo1 from "../assets/logo01.svg";
import logo2 from "../assets/logo02.svg";
import logo3 from "../assets/logo03.svg";
import logo4 from "../assets/logo04.svg";
import logo5 from "../assets/logo05.svg";
import logo6 from "../assets/logo06.svg";

const Trendingbrands = () => {
  return (
    <div className={classes.container}>
      <img src={trendingbrands} />
      <div className={classes.logo}>
        <img src={logo1} />
        <img src={logo2} />
        <img src={logo3} />
        <img src={logo4} />
        <img src={logo5} />
        <img src={logo6} />
      </div>
    </div>
  );
};

export default Trendingbrands;
