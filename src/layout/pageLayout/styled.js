import styled from "styled-components";
import { themeFont } from "../../common/theme";

export const PageContainer = styled.div`
  font-family : ${themeFont.ContentFont};
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
  background-color: white;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns:
    1fr
    min(1250px, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position: sticky;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
  }
`;

export const ContentContainer = styled.div`
padding: 30px;
`;
