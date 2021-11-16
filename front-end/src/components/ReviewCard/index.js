import {
  Wrapper,
  ReviewBody,
  ReviewAuthor,
  ReviewRating,
  RatingWrapper,
} from "./styles";
import { displayStars } from "../../utils";

const ReviewCard = ({ review }) => {
  const { user, text, rating } = review;
  const { name } = user;
  console.log(review, "-------review");
  return (
    <Wrapper>
      <RatingWrapper>
        Rating: <ReviewRating src={displayStars(rating)} />
      </RatingWrapper>
      <ReviewBody>{text}</ReviewBody>
      <ReviewAuthor>submitted by {name}</ReviewAuthor>
    </Wrapper>
  );
};

export default ReviewCard;
