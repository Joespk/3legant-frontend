import { Typography, styled } from "@mui/material";
import Rating from "@mui/material/Rating";
import classes from "./Card.module.css";
import { ContentDTO } from "../../type/dto";

interface Icontentprops {
  content: ContentDTO;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#343839",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Card = ({ content }: Icontentprops) => {
  return (
    <div className={classes.card}>
      <img src={content.imageUrl} alt="Card.png" />
      <div className={classes.content}>
        <Typography component="legend"></Typography>
        <StyledRating name="read-only" value={content.rating} readOnly />
        <span className={classes.name}>{content.name}</span>
        <p className={classes.price}>${content.price}</p>
      </div>
    </div>
  );
};

export default Card;
