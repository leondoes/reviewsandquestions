import React, { useState, useRef, useEffect } from "react";
import { SimulationButton, SimulationContainer } from "./styled";
import { ReactComponent as TriangleRight } from '../../Assets/triangle-right.svg';
import { ReactComponent as TriangleDown } from '../../Assets/triangle-down.svg';


const SimulationMenu = ({
  toggleReviewsEmptyState,
  toggleQuestionsEmptyState,
  handleTogglePhoneView,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuVisible && !toggleRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [isMenuVisible]);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <SimulationContainer isMenuVisible={isMenuVisible}>
      <div ref={toggleRef} onClick={toggleMenu} onKeyDown={handleKeyDown} tabIndex="0">
      {isMenuVisible ? <TriangleDown /> : <TriangleRight />} Simulation Controls
      </div>
      <div className="menu" style={{ display: isMenuVisible ? "block" : "none" }} ref={menuRef}>
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
          className={windowWidth <= 770 ? "toggle-phone-view" : ""}
          onClick={() => handleToggleAction(handleTogglePhoneView)}
          tabIndex="0"
          onKeyPress={(e) => handleKeyPress(e, handleTogglePhoneView)}
        >
          Simulate Phone View
        </SimulationButton>
      </div>
    </SimulationContainer>
  );
};

export default SimulationMenu;
