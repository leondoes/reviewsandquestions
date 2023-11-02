import styled from "styled-components";

export const StarRatingList = styled.div `
display: flex;
flex-direction: column;
font-size: 18px;
user-select: none
`;
export const StarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilledStars = styled.span`
  color: black; 
  opacity: ${props => props.isHovered ? '1' : '0.6'}; 
`;

export const WhiteStars = styled.span`
  color: white;
`;


export const BarContainer = styled.div`
  background-color: white; 
  height: 8px; 
  width: 100%;  // Ensure it takes up full width
  max-width: 150px; // Adjust to the maximum width you desire for 100% rating
  margin-left: 10px; 
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  background-color: #333; 
  height: 8px; 
  width: ${props => (props.width ? `${props.width / 10}px` : '0')}; 
  opacity: ${props => props.isHovered ? '1' : '0.6'}; 
  transition: width 0.3s ease, opacity 0.3s ease; 
`;