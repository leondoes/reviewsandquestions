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
  @media (max-width: 768px) {
    &.toggle-phone-view {
      opacity: 0.5; // Gray out the button
      cursor: not-allowed; // Indicate that the button is not clickable

      position: relative; // Positioning context for the pseudo-element

      // Add a pseudo-element for the "Desktop Only" text
      &:after {
        content: "Desktop Only";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff; // Use white or another contrasting color
        background-color: rgba(
          0,
          0,
          0,
          0.75
        ); // Semi-transparent black background
        padding: 2px 5px; // Add some padding around the text
        border-radius: 3px; // Optional: rounded corners for the label background
        font-size: 12px; // Make the font larger for visibility
        font-weight: bold; // Optional: make the font bold
        z-index: 2; // Ensure it's above the button content
      }
    }
  }
`;

export const SimulationContainer = styled.div`
  position: relative; // Make this a positioned container
  user-select: none;
  .drawer-toggle {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding-bottom: 10px;
    // Additional styling for the drawer toggle
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
