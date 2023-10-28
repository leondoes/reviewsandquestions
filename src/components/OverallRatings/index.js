import React, { useState } from "react";
import {
  OverallContainer,
  AverageRating,
  StarRatingsContainer,
  AskQuestionContainer,
  AskQuestionButton,
  VerticalDivider,
  RatingsContainer,
  QuestionFormContainer,
} from "./styled";
import QuestionForm from "../QuestionForm";
import StarRating from "../StarRating";

const OverallRatings = () => {
  const [questionFormVisible, setQuestionFormVisible] = useState(false);

  const toggleQuestionForm = () => {
    setQuestionFormVisible(!questionFormVisible);
  };

  return (
    <OverallContainer>
      <RatingsContainer>
        <AverageRating>
          <>4.7 210 Reviews, 6 Q&As</>
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
