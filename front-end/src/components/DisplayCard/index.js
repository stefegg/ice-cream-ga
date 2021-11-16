import {
  Wrapper,
  Header,
  SubHeader,
  StoreImage,
  Details,
  RatingStars,
  Reviews,
  ReviewHeader,
} from "./styles";
import { displayStars } from "../../utils";
import { useState, useEffect } from "react";
import { getReview } from "../../services";
import { ReviewCard } from "..";
import { reviewUrl } from "../../constants";

const DisplayCard = ({ business }) => {
  const { alias, name, location, image_url, rating } = business;
  const { display_address } = location;
  const [review, setReview] = useState(null);
  useEffect(() => {
    getReview(reviewUrl, alias, setReview);
  }, []);
  return (
    <Wrapper>
      <StoreImage src={image_url} />
      <Details>
        <Header>{name}</Header>
        {display_address &&
          display_address.map((item, idx) => (
            <SubHeader key={idx}>{item}</SubHeader>
          ))}
        <SubHeader>
          Yelp Weighted Rating: <RatingStars src={displayStars(rating)} />
        </SubHeader>
      </Details>
      <Reviews>
        <ReviewHeader>Top Review</ReviewHeader>
        {review && <ReviewCard review={review} />}
      </Reviews>
    </Wrapper>
  );
};

export default DisplayCard;
