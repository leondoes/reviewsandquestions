import React, { useState, useContext } from "react";
import {
  OverallContainer,
  AverageRating,
  StarRatingsContainer,
  StarAverage,
  AskQuestionContainer,
  AskQuestionButton,
  VerticalDivider,
  RatingsContainer,
  QuestionFormContainer,
} from "./styled";
import StarCalculator from "../StarCalculator";
import QuestionForm from "../QuestionForm";
import StarRating from "../StarRating";
import DataContext from "../../contexts/Data/DataContext";

const OverallRatings = () => {
  const [questionFormVisible, setQuestionFormVisible] = useState(false);
  const { totalReviews, totalQuestions, averageScore } =
    useContext(DataContext);

  const toggleQuestionForm = () => {
    setQuestionFormVisible(!questionFormVisible);
  };

  return (
    <OverallContainer>
      <RatingsContainer>
        <AverageRating>
          <StarAverage>
            {averageScore ? averageScore.toFixed(1) : ""}
          <StarCalculator averageScore={averageScore} /></StarAverage>
          
          <>
            {totalReviews} Reviews, {totalQuestions} Q&As
          </>
        </AverageRating>

        <VerticalDivider />
        <StarRatingsContainer>
          <StarRating />
        </StarRatingsContainer>
        <VerticalDivider />
        <AskQuestionContainer>
          <AskQuestionButton onClick={toggleQuestionForm}>
            Ask a Question
          </AskQuestionButton>
        </AskQuestionContainer>
      </RatingsContainer>
      <QuestionFormContainer className={questionFormVisible ? "active" : ""}>
        <QuestionForm />
      </QuestionFormContainer>
    </OverallContainer>
  );
};

export default OverallRatings;
