import classes from "./Footer.module.css";
import arrow from "../assets/arrow-right.svg";
import payment0 from "../assets/payment/Payment0.svg";
import payment1 from "../assets/payment/Payment1.svg";
import payment2 from "../assets/payment/Payment2.svg";
import payment3 from "../assets/payment/Payment3.svg";
import payment4 from "../assets/payment/Payment4.svg";
import payment5 from "../assets/payment/Payment5.svg";

const Footer = () => {
  return (
    <div className={classes.block}>
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.contact}>
            <h2>3legant.</h2>
            <div className={classes.menu}>
              <span className={classes.address}>
                43111 Hai Trieu street,District 1, HCMC Vietnam
              </span>
              <span>84-756-3237</span>
            </div>
          </div>
          <div className={classes.page}>
            <h4>Page</h4>
            <div className={classes.menu}>
              <a>Home</a>
              <a>Shop</a>
              <a>Product</a>
              <a>Articales</a>
              <a>Contact Us</a>
            </div>
          </div>
          <div className={classes.page}>
            <h4>Info</h4>
            <div className={classes.menu}>
              <a>Shipping Policy</a>
              <a>Return & Refund</a>
              <a>Support</a>
              <a>FAQs</a>
            </div>
          </div>
          <div className={classes.contact}>
            <h4>Join Newsletter</h4>
            <div className={classes.menu}>
              <span className={classes.join}>
                Subscribe our newsletter to get more deals, new products and
                promotions
              </span>
              <div className={classes.email}>
                <input
                  type="email"
                  className={classes.text}
                  placeholder="Enter your email"
                />
                <button>
                  <img src={arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.content2}>
            <span>Copyright © 2023 3legant. All rights reserved</span>
            <div className={classes.privacy}>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
            <div className={classes.payment}>
              <img src={payment0} />
              <img src={payment1} />
              <img src={payment2} />
              <img src={payment3} />
              <img src={payment4} />
              <img src={payment5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
