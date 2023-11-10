import styled from "styled-components";

export const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const RatingTotalsContainer = styled.div`
  display: block;
  margin: 0;
  padding-bottom: 28px;
`;

export const PhoneViewWrapper = styled.div`
  ${({ simulatePhoneView }) =>
    simulatePhoneView &&
    `
    width: 375px; // typical phone width
    height: 667px; // typical phone height
    padding: 5px;
    margin: 20px auto; // center it
    box-shadow: 0px 0px 10px #000; // optional shadow for effect
    border-radius: 20px; // rounded corners
    border: 5px solid black; // black border
    position: relative; // Required for pseudo-element positioning
    overflow: hidden; // Hide the overflow here
  `}
`;

export const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto; // Apply scrollable to this inner wrapper
  border-radius: 15px; // Adjust as necessary to fit within the PhoneViewWrapper border
`;
