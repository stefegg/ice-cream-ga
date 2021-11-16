import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  border-radius: 4px;
  background: #fffdd0;
  display: flex;
  flex-direction: row;
  padding: 40px;
  margin-bottom: 24px;
  height: 40vh;
`;

export const Header = styled.h1`
  font-size: 32px;
  font-family: Lobster;
  color: #7b3f00;
  margin: 0px;
`;

export const SubHeader = styled.h2`
  font-size: 18px;
  color: #ef8990;
  font-weight: 400;
  margin: 12px 0px;
  display: flex;
  align-items: center;
`;

export const StoreImage = styled.img`
  width: 25%;
  object-fit: cover;
  border-radius: 4px;
`;

export const Details = styled.div`
  width: 45%;
  margin-left: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RatingStars = styled.img`
  width: 25%;
  margin-left: 8px;
`;

export const Reviews = styled.div`
  background: #e77da3;
  width: 30%;
  border-radius: 4px;
  padding: 20px;
`;

export const ReviewHeader = styled.h3`
  color: #7b3f00;
  font-size: 24px;
  font-family: Lobster;
  margin: 0px;
`;
