import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const OverallContainer = styled.div``;

export const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  background-color: #ece9e0;
  width: 100%;
  padding: 28px 0px;
  align-items: center;

  // Media query styles
  @media (max-width: 770px) {
    grid-template-columns: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    grid-template-columns: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const AverageRating = styled.div`
  padding-left: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 770px) {
    padding-left: 20px;
    align-items: flex-start;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    padding-left: 20px;
    align-items: flex-start;
  `}
`;

export const StarAverage = styled.div`
  font-size: 20px;
  display: flex;
  gap: 5px;
`;

export const StarRatingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ totalReviews }) => (totalReviews > 0 ? fadeIn : fadeOut)} 0.5s
    ease;
  visibility: ${({ totalReviews }) =>
    totalReviews > 0 ? "visible" : "hidden"};
  height: ${({ totalReviews }) => (totalReviews > 0 ? "auto" : "70px")};

  @media (max-width: 770px) {
    display: flex;
    padding-left: 20px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
      display: flex;
    padding-left: 20px;
  `}
`;

export const VerticalDivider = styled.div`
  background-color: #979797;
  width: 1px;
  height: 70px;
  margin: auto;
  animation: ${({ totalReviews }) => (totalReviews > 0 ? fadeIn : fadeOut)} 0.5s
    ease;
  visibility: ${({ totalReviews }) =>
    totalReviews > 0 ? "visible" : "hidden"};

  @media (max-width: 770px) {
    display: none;
  }
  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
      display: none; 
  `}
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 70px;

  @media (max-width: 770px) {
    display: none;
  }
  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
      display: none; 
  `}
`;

export const AskQuestionContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 770px) {
    align-items: flex-start;
    padding-left: 20px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
      align-items: flex-start;
    padding-left: 20px; 
  `}
`;

export const AskQuestionButton = styled.button`
  border: 1px solid black !important;
  background: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  height: 40px;
  min-width: 150px;
  margin: auto;
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

export const QuestionFormContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease-in-out;

  &.active {
    max-height: 600px;
  }
`;

export const AllTotals = styled.div`
  font-size: 16px;
  font-weight: 300;
  padding-top: 18px;
`;
