import styled from "styled-components";

export const OverallContainer = styled.div `
`;

export const RatingsContainer = styled.div`
  display: flex;
  background-color: #ece9e0;
  width: 100%;
  padding: 28px 0px;
`;

export const AverageRating = styled.div`
  flex: 1;
  padding: 10px;
  margin: auto;
`;

export const StarAverage = styled.div`
font-size: 20px;
display: flex;
`;

export const StarRatingsContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin: auto;
`;

export const AskQuestionContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AskQuestionButton = styled.button`
  border: 1px solid black !important;
  background: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  height: 40px;
  width: auto;
  min-height: auto;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000 !important;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ededed;
  }
`;

export const VerticalDivider = styled.div`
  background-color: #979797;
  width: 1px;
  height: 70px;
  margin: auto;
`;

export const QuestionFormContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;

  &.active {
    max-height: 500px;
  }
`;
