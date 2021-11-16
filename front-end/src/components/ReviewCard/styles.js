import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ef8990;
  overflow: scroll;
  margin-top: 12px;
  border-radius: 4px;
  height: 70%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fffdd0;
`;

export const ReviewBody = styled.div`
  margin-top: 4px;
`;

export const ReviewAuthor = styled.div`
  margin-top: 4px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewRating = styled.img`
  max-width: 40%;
  margin-left: 8px;
`;
