import React, { useState, useContext } from "react";
import {
  OverallContainer,
  AverageRating,
  StarRatingsContainer,
  StarAverage,
  AskQuestionContainer,
  AskQuestionButton,
  AllTotals,
  VerticalDivider,
  RatingsContainer,
  QuestionFormContainer,
} from "./styled";
import FormComplete from "../FormComplete";
import StarCalculator from "../StarCalculator";
import QuestionForm from "../QuestionForm";
import SortByStars from "../SortByStars";
import DataContext from "../../contexts/Data/DataContext";

const OverallRatings = () => {
  const [questionFormVisible, setQuestionFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { totalReviews, totalQuestions, averageScore} =
    useContext(DataContext);

  const toggleQuestionForm = () => {
    setQuestionFormVisible(!questionFormVisible);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const handleFormCompleteClose = () => {
    setIsSubmitted(false);
    setQuestionFormVisible(false); // Ensure the question form is collapsed
  };

  return (
    <OverallContainer>
      <RatingsContainer>
        <AverageRating>
          <StarAverage>
            {averageScore ? averageScore.toFixed(1) : ""}
            <StarCalculator averageScore={averageScore} />
          </StarAverage>

          <AllTotals>
            {totalReviews} Reviews, {totalQuestions} Q&As
          </AllTotals>
        </AverageRating>

        <VerticalDivider />
        <StarRatingsContainer>
          <SortByStars/>
        </StarRatingsContainer>
        <VerticalDivider />
        <AskQuestionContainer>
          <AskQuestionButton onClick={toggleQuestionForm}>
            Ask a Question
          </AskQuestionButton>
        </AskQuestionContainer>
      </RatingsContainer>
       <QuestionFormContainer className={questionFormVisible ? "active" : ""}>
        {isSubmitted ? (
          <FormComplete onClose={handleFormCompleteClose} />
        ) : questionFormVisible && (
          <QuestionForm onFormSubmit={handleFormSubmit} />
        )}
      </QuestionFormContainer>
    </OverallContainer>
  );
};

export default OverallRatings;
