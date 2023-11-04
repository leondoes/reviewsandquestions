import styled from "styled-components";

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
    align-items: flex-start; /* Make sure items align to the start (top) in flex mode too */
    justify-content: space-between;
    padding-left: 0;
  }
`;


export const LeftColumn = styled.div`
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
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  padding-right: 10px;

  @media (max-width: 770px) {
    order: 3; // This will ensure the date is to the far right
    padding-right: 0;
    margin-left: auto; // This will keep the date to the right
  }
`;

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Keep this content vertically centered */

  @media (max-width: 770px) {
    order: 1;
    flex-basis: 100%;
    margin-bottom: 10px;
  }
`;

export const AllReviews = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 600px;
`;


export const Stars = styled.div`
  font-family: 'yotpo-widget-font';
  font-size: 17.5px;
  margin-top: -6px;
  padding-bottom: 15px;

  @media (max-width: 770px) {
    order: 1; // This should be on top
    padding-bottom: 10px;
    // Remove grid-area since it's a grid property, not flexbox
  }
`;

export const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;

  @media (max-width: 770px) {
    order: 2; // Title comes after stars and content
    font-size: 14px;
  }
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
    order: 2; // Content comes after stars
    font-size: 14px;
  }
`;