import classes from "./Shopblog.module.css";
import { allContent } from "../../data/content";
import Card from "./Card";

const Shopblog = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.shop}>Best Seller</h2>
      <div className={classes.shop}>
        <div className={classes.content}>
          {allContent.map((content) => (
            <Card key={content.id} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopblog;
