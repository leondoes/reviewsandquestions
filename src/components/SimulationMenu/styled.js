import styled from "styled-components";

export const SimulationButton = styled.button`
  user-select: none;
  border: 0px solid black !important;
  background: none;
  font-size: 12px;
  height: 40px;
  margin: auto;
  width: 100%;
  min-height: auto;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  color: #000000 !important;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ededed;
  }
  @media (max-width: 770px) {
    &.toggle-phone-view {
      opacity: 0.5;
      cursor: not-allowed;
      position: relative;
      &:after {
        content: "Desktop Only";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.75);
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: bold;
        z-index: 10;
      }
    }
  }
`;

export const SimulationContainer = styled.div`
  position: relative; // Make this a positioned container
  user-select: none;
  width: 200px;
  cursor: pointer;
  .drawer-toggle {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .menu {
    display: ${({ isMenuVisible }) => (isMenuVisible ? "flex" : "none")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    position: absolute; // Position absolutely within the container
    top: 100%; // Position right below the toggle
    left: 0;
    z-index: 10; // Ensure it's above other content
    background: white; // Or any color fitting your design
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Optional: adds depth
    width: 160px; // Take the full width of the parent
    // Additional styling for the menu
  }
`;
