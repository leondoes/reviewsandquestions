import styled from "styled-components";


export const OverallContainer = styled.div `
`;

export const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  background-color: #ece9e0;
  width: 100%;
  padding: 28px 0px;
  align-items: center;

  @media (max-width: 770px) {
    grid-template-columns: none; // remove the grid columns
    display: flex;
    flex-direction: column;
    align-items: flex-start; // align to the left
  }
`;

export const AverageRating = styled.div`
  padding-left: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 770px) {
    padding-left: 20px; // adjust padding for mobile view
    align-items: flex-start; // align to the left
  }
`;

export const StarAverage = styled.div`
font-size: 20px;
display: flex;
gap:5px;
`;

export const StarRatingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    justify-content: flex-start; // align to the left
    padding: 20px;

  }
`;

export const AskQuestionContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    align-items: flex-start; // align to the left
    padding-left: 20px;
  }
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

  @media (max-width: 770px) {
    display: none; // Hide the dividers on small screens
  }
`;

export const QuestionFormContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;

  &.active {
    max-height: 600px;
  }
`;

export const AllTotals = styled.div`
font-size: 16px;
font-weight: 300;
padding-top: 18px;
`;