import React, { useState, useRef, useEffect } from "react";
import { SimulationButton, SimulationContainer } from "./styled";

const SimulationMenu = ({
  toggleReviewsEmptyState,
  toggleQuestionsEmptyState,
  handleTogglePhoneView,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef();
  const [menuFocus, setMenuFocus] = useState(false);

  useEffect(() => {
    if (isMenuVisible && !menuFocus) {
      setIsMenuVisible(false);
    }
  }, [menuFocus, isMenuVisible]);

  const handleMenuFocus = () => {
    setMenuFocus(true);
  };

  const handleMenuBlur = (event) => {
    setTimeout(() => {
      if (
        menuRef.current &&
        !menuRef.current.contains(document.activeElement)
      ) {
        setMenuFocus(false);
      }
    }, 10);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // Only close the menu if it's already visible and the clicked element is not within the menuRef
      if (isMenuVisible && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    }
    // Listen for mouse up to end all click events before handling outside click
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isMenuVisible]);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleToggleAction = (action) => {
    action();
  };

  const handleKeyPress = (event, action) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      handleToggleAction(action);
    }
  };

  return (
    <SimulationContainer
      isMenuVisible={isMenuVisible}
      onFocus={handleMenuFocus}
      onBlur={handleMenuBlur}
    >
      <div
        className="drawer-toggle"
        onClick={toggleMenu}
        tabIndex="0"
        onKeyPress={(e) => handleKeyPress(e, toggleMenu)}
      >
        {isMenuVisible ? "▼" : "►"}
        <span>Simulation Controls</span>
      </div>
      <div className="menu" ref={menuRef}>
        <SimulationButton
          onClick={() => handleToggleAction(toggleReviewsEmptyState)}
          tabIndex="0"
          onKeyPress={(e) => handleKeyPress(e, toggleReviewsEmptyState)}
        >
          Reviews Empty State
        </SimulationButton>
        <SimulationButton
          onClick={() => handleToggleAction(toggleQuestionsEmptyState)}
          tabIndex="0"
          onKeyPress={(e) => handleKeyPress(e, toggleQuestionsEmptyState)}
        >
          Questions Empty State
        </SimulationButton>
        <SimulationButton
          onClick={() => handleToggleAction(handleTogglePhoneView)}
          tabIndex="0"
          onKeyPress={(e) => handleKeyPress(e, handleTogglePhoneView)}
          onBlur={handleMenuBlur}
        >
          Simulate Phone View
        </SimulationButton>
      </div>
    </SimulationContainer>
  );
};

export default SimulationMenu;
