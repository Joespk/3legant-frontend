import classes from "./Bannergrid.module.css";
import arrowright from "../assets/arrow-right.svg";

const Bannergrid = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bannergrid}>
        <div className={classes.november}>
          <div className={classes.divtext}>
            <h1>November Outfits</h1>
            <a className={classes.collection}>
              Collection
              <img src={arrowright} />
            </a>
          </div>
        </div>
        <div className={classes.cashmereset}>
          <div className={classes.divtext}>
            <h1>Cashmere Set</h1>
            <a className={classes.collection}>
              Collection
              <img src={arrowright} />
            </a>
          </div>
        </div>
        <div className={classes.thenewnordic}>
          <div className={classes.divtext}>
            <h1>The New Nordic</h1>
            <a className={classes.collection}>
              Collection
              <img src={arrowright} />
            </a>
          </div>
        </div>
        <div className={classes.theleather}>
          <div className={classes.divtext}>
            <h1>The Leather</h1>
            <a className={classes.collection}>
              Collection
              <img src={arrowright} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannergrid;
