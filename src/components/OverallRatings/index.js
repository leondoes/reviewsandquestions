import React, { useState, useContext, useEffect } from "react";
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
  Placeholder
} from "./styled";
import FormComplete from "../FormComplete";
import StarCalculator from "../StarCalculator";
import QuestionForm from "../QuestionForm";
import SortByStars from "../SortByStars";
import DataContext from "../../contexts/Data/DataContext";

const OverallRatings = ({ isQuestionFormVisible, onAskQuestionClick, simulateReviewsEmpty }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { totalReviews, totalQuestions, averageScore } =
    useContext(DataContext);

  const handleAskQuestionClick = () => {
    onAskQuestionClick();
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const handleFormCompleteClose = () => {
    setIsSubmitted(false);

    onAskQuestionClick();
  };

  useEffect(() => {
    if (!isQuestionFormVisible) {
      setIsSubmitted(false);
    }
  }, [isQuestionFormVisible]);

  return (
    <OverallContainer>
      <RatingsContainer>
        <AverageRating>
          <StarAverage>
            {!simulateReviewsEmpty && averageScore ? averageScore.toFixed(1) : ""}
            {!simulateReviewsEmpty && <StarCalculator averageScore={averageScore || 0} />}
          </StarAverage>

          <AllTotals>
            {!simulateReviewsEmpty && totalReviews ? `${totalReviews} Reviews` : "0 Reviews"}
            {!simulateReviewsEmpty && totalQuestions > 0 && `, ${totalQuestions} Q&As`}
          </AllTotals>
        </AverageRating>
        {simulateReviewsEmpty ? (
          <>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
          </>
        ) : (
          <>
            <VerticalDivider totalReviews={totalReviews} />
            <StarRatingsContainer totalReviews={totalReviews}>
              <SortByStars />
            </StarRatingsContainer>
            <VerticalDivider totalReviews={totalReviews} />
          </>
        )}

        <AskQuestionContainer>
          <AskQuestionButton onClick={handleAskQuestionClick}>
            Ask a Question
          </AskQuestionButton>
        </AskQuestionContainer>
      </RatingsContainer>

      <QuestionFormContainer className={isQuestionFormVisible ? "active" : ""}>
        {isSubmitted ? (
          <FormComplete onClose={handleFormCompleteClose} />
        ) : (
          isQuestionFormVisible && (
            <QuestionForm onFormSubmit={handleFormSubmit} />
          )
        )}
      </QuestionFormContainer>
    </OverallContainer>
  );
};

export default OverallRatings;
