import classes from "./Navbar.module.css";
import seachIcon from "../assets/search02.svg";
import userIcon from "../assets/user-circle.svg";
import cartIcon from "../assets/CartButton.svg";

const Navbar = () => {
  return (
    <div className={classes.body}>
      <div>
        <span className={classes.logo}>3legant.</span>
      </div>

      <ul className={classes.menu}>
        <li>Home</li>
        <li>Shop</li>
        <li>Product</li>
        <li>Contact Us</li>
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
