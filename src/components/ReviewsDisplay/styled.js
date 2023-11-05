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
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 0;
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
`;

export const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;

  @media (max-width: 770px) {
    order: 2;
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
    order: 2;
    font-size: 14px;
  }
`;

export const NoReviewsMessage = styled.div`
  text-align: center;
  padding: 35px;
  font-size: 14px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
