import classes from "./Notificationbar.module.css";
import ticket from "../assets/ticket-percent.svg";
import close from "../assets/close.svg";
import arrowright from "../assets/arrow-right.svg";

const Notificationbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={ticket} />
        <span className={classes.text}>30% off storewide — Limited time! </span>
        <a className={classes.shopnow}>
          Collection
          <img src={arrowright} />
        </a>
      </div>
      <div className={classes.icon}>
        <img src={close} className={classes.close} />
      </div>
    </div>
  );
};

export default Notificationbar;
