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

export const ReviewListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 3fr 0fr;
  gap: 10px;
  padding: 25px;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 770px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 0;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 0;
  `}

 // Add this for the entering animation start state
 &.review-enter {
    opacity: 0;
  }

  // Add this for the entering active state
  &.review-enter-active {
    animation: ${fadeIn} 500ms forwards;
  }

  // Add this for the exiting animation start state
  &.review-exit {
    opacity: 1;
  }

  // Add this for the exiting active state
  &.review-exit-active {
    animation: ${fadeOut} 500ms forwards;
  }
`;

export const NameColumn = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-left: 32px;

  @media (max-width: 770px) {
    font-weight: normal;
    order: 2;
    padding-left: 0;
    flex-grow: 1;
    margin-right: auto;
    font-size: 14px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    font-weight: normal;
    order: 2;
    padding-left: 0;
    flex-grow: 1;
    margin-right: auto;
    font-size: 14px;
  `}
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  padding-right: 10px;

  @media (max-width: 770px) {
    order: 3;
    padding-right: 0;
    margin-left: auto;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    order: 3;
    padding-right: 0;
    margin-left: auto;
  `}
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 770px) {
    order: 1;
    flex-basis: 100%;
    margin-bottom: 10px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    order: 1;
    flex-basis: 100%;
    margin-bottom: 10px;
  `}
`;

export const AllReviews = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 130px;
`;

export const Stars = styled.div`
  font-family: "yotpo-widget-font";
  font-size: 17.5px;
  margin-top: -6px;
  padding-bottom: 15px;

  @media (max-width: 770px) {
    order: 1;
    padding-bottom: 10px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    order: 1;
    padding-bottom: 10px;
  `}
`;

export const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;

  @media (max-width: 770px) {
    order: 2;
    font-size: 14px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    order: 2;
    font-size: 14px;
  `}
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  @media (max-width: 770px) {
    order: 2;
    font-size: 14px;
  }

  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    order: 2;
    font-size: 14px;
  `}
`;

export const NoReviewsMessage = styled.div`
  text-align: center;
  padding: 35px;
  font-size: 14px;

   // Define your animation (keep the name unique if you have multiple animations)
   animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 600ms; // Same as your timeout in the useEffect hook
  opacity: 0; // Start with the message hidden
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
