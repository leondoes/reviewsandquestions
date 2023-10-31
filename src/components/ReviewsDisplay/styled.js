import styled from 'styled-components';

export const ReviewListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 3fr 0fr;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid black;
  min-height: 120px;
`;

export const AllReviews = styled.ul`
  list-style: none;
  padding: 0;
  min-height: 800px;
`;

export const LeftColumn = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center; 
  padding-left: 32px;
`;

export const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  padding-right: 10px; /* Add space to the right to position it at the top right corner */
`;

export const Stars = styled.div`
  font-size: 20px;
  margin-top: -6px;
  padding-bottom: 10px;
`;

export const Title = styled.div `
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Content = styled.div `
padding-bottom: 10px;

button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
