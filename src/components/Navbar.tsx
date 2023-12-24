import classes from "./Navbar.module.css";
import seachIcon from "../assets/search02.svg";
import userIcon from "../assets/user-circle.svg";
import cartIcon from "../assets/CartButton.svg";

const Navbar = () => {
  return (
    <div className={classes.body}>
      <div>
        <p className={classes.logo}>3legant.</p>
      </div>

      <ul className={classes.menu}>
        <a>Home</a>
        <a>Shop</a>
        <a>Product</a>
        <a>Contact Us</a>
      </ul>

      <div className={classes.icon}>
        <img src={seachIcon} />
        <img src={userIcon} />
        <img src={cartIcon} />
      </div>
    </div>
  );
};

export default Navbar;
