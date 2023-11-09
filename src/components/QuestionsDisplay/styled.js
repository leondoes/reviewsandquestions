import styled, {keyframes} from "styled-components";

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

export const AllQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  min-height: 130px;
`;


export const QuestionItem = styled.div`
  width: 100%;
  
  // Add this for the entering animation
  &.question-enter {
    animation: ${fadeIn} 500ms forwards;
  }

  &.question-enter-active {
    animation: ${fadeIn} 500ms forwards;
  }

  // Add this for the exiting animation
  &.question-exit {
    animation: ${fadeOut} 500ms forwards;

    &.question-exit-active {
  animation: ${fadeOut} 500ms forwards;
}
  }
`;

export const AskerInfo = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal !important;
`;

export const QuestionDate = styled.div`
  font-weight: 400;
  font-size: 16px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const QuestionText = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export const AnswerInfo = styled.div`
  font-size: 12px;
  color: #474747;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AnswerText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  font-weight: 400;
  padding-bottom: 35px;
  padding-left: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal !important;

  @media (max-width: 770px) {
    font-size: 14px;
    padding-right: 35px
    padding-bottom: 10px;
  }
`;

export const AnswerDate = styled.div`
  font-size: 12px;
  font-weight: 300;
  align-self: flex-end;
  padding-left: 15px;
  display: block;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const AnswerDateMini = styled.div`
  display: none; // Hide this by default

  @media (max-width: 770px) {
    font-size: 12px;
    font-weight: 300;
    align-self: flex-start;
    padding-left: 15px;
    display: block;
    order: 3;
  }
`;

export const AnswerContainer = styled.div`
  display: flex; // Use flexbox
  flex-direction: row;
  padding: 25px 0;
  padding-bottom: 30px;
  min-height: 150px;
`;

export const AnswerLeftBorder = styled.div`
  flex-shrink: 0;
  border-left: 2px solid #ece9e0;
  margin-right: 10px;
`;

export const AnswerBottomBorder = styled.div`
  border-bottom: 2px solid #e9e9e9;

  ${QuestionItem}:last-child & {
    border-bottom: none;
  }
`;

export const AnswerContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const AskQuestionButton = styled.button`
  text-align: center;
  border: 1px solid black !important;
  background: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  height: 40px;
  min-width: 150px;
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

  visibility: hidden;
  opacity: 0;
  
  // Define your animation (keep the name unique if you have multiple animations)
  animation: fadeInAskButton 0.5s ease-out 600ms forwards;

  @keyframes fadeInAskButton {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    1% {
      opacity: 0;
      visibility: visible; // Make the button visible but still fully transparent
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
