import styled from "styled-components";

export const TabStyle = styled.button`
  display: inline;
  margin-right: 48px;
  padding-left: 0px;
  line-height: 1;
  position: relative;
  transition: color 0.2s ease-in-out;
  font-family: "Open Sans", sans-serif;
  font-style: normal !important;
  font-size: 14px;
  line-height: 17px;
  border: none;
  padding-top: 30px;
  margin-bottom: -2px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: 500;
  background-color: transparent;
  text-align: match-parent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  color: ${(props) => (props.isSelected ? "black" : "grey")};
  cursor: pointer;
  padding-bottom: 10px;

  border-bottom: ${(props) => (props.isSelected ? "3px solid" : "none")};
`;

export const TabSwitchContainer = styled.div`
  border-bottom: 1px solid;
  background: transparent;
  margin-bottom: -15px;
`;
