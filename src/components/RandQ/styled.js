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
    width: 375px;
    height: 667px;
    padding: 5px;
    margin: 20px auto;
    box-shadow: 0px 0px 10px #000;
    border-radius: 20px;
    border: 5px solid black;
    position: relative;
    overflow: hidden;
  `}
`;

export const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  border-radius: 15px;
`;
