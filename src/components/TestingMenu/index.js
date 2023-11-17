import React, { useState, useRef, useEffect } from "react";
import { TestingButton, TestingContainer } from "./styled";
import { ReactComponent as TriangleRight } from '../../Assets/triangle-right.svg';
import { ReactComponent as TriangleDown } from '../../Assets/triangle-down.svg';


const TestingMenu = ({
  toggleReviewsEmptyState,
  toggleQuestionsEmptyState,
  handleTogglePhoneView,
}) => {
  const [reviewsState, setReviewsState] = useState(true);
  const [questionsState, setQuestionsState] = useState(true);
  const [isPhoneView, setIsPhoneView] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef();
  const toggleRef = useRef();

  const handleToggleReviews = () => {
    setReviewsState(!reviewsState);
    toggleReviewsEmptyState();
  };

  const handleToggleQuestions = () => {
    setQuestionsState(!questionsState);
    toggleQuestionsEmptyState();
  };

  const handleTogglePhone = () => {
    if (windowWidth > 770) {
      setIsPhoneView(!isPhoneView);
      handleTogglePhoneView();
    }
  };

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
    <TestingContainer isMenuVisible={isMenuVisible}>
      <div ref={toggleRef} onClick={toggleMenu} onKeyDown={handleKeyDown} tabIndex="0">
      {isMenuVisible ? <TriangleDown /> : <TriangleRight />} Testing Controls
      </div>
      <div className="menu" style={{ display: isMenuVisible ? "block" : "none" }} ref={menuRef}>
      <TestingButton
        onClick={handleToggleReviews}
        tabIndex="0"
        onKeyPress={(e) => handleKeyPress(e, handleToggleReviews)}
      >
        {reviewsState ? "Reviews Empty State" : "Populate Reviews"}
      </TestingButton>
      <TestingButton
        onClick={handleToggleQuestions}
        tabIndex="0"
        onKeyPress={(e) => handleKeyPress(e, handleToggleQuestions)}
      >
        {questionsState ? "Questions Empty State" : "Populate Questions"}
      </TestingButton>
      <TestingButton
        className={windowWidth <= 770 ? "toggle-phone-view" : ""}
        onClick={handleTogglePhone}
        tabIndex="0"
        onKeyPress={(e) => handleKeyPress(e, handleTogglePhone)}
      >
        {isPhoneView ? "Exit Phone View" : "Simulate Phone View"}
      </TestingButton>
      </div>
    </TestingContainer>
  );
};

export default TestingMenu;
