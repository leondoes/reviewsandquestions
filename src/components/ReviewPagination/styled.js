import styled from "styled-components";
import { themeFont } from "../../common/theme";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  font-family: ${themeFont.ContentFont};
  font-size: 14px;
  margin: 0 15px 0 0;
  padding: 5px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
  -webkit-text-fill-color: black;
`;

export const ActiveButton = styled(PageButton)`
  font-weight: bold;
  text-decoration: underline;
`;
