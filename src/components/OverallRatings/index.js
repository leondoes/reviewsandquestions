import React, { useState } from 'react';
import {
  AverageRating,
  QuestionButton,
  StarRatings,
  AskQuestionButton,
  VerticalDivider,
  RatingsContainer,
} from './styled';
import QuestionForm from '../QuestionForm';

const OverallRatings = () => {
  const [questionFormVisible, setQuestionFormVisible] = useState(false);

  const toggleQuestionForm = () => {
    setQuestionFormVisible(!questionFormVisible);
  };

  return (
    <RatingsContainer>
      <AverageRating>
        <>
          Total Reviews: 100 | Average Rating: 4.5
        </>
      </AverageRating>
      <VerticalDivider />
      <StarRatings>
        <ul>
          <li>5 Star: 45</li>
          <li>4 Star: 30</li>
          <li>3 Star: 15</li>
          <li>2 Star: 5</li>
          <li>1 Star: 5</li>
        </ul>
      </StarRatings>
      <VerticalDivider />
      <AskQuestionButton>
        <button onClick={toggleQuestionForm}>
           Ask a Question
        </button>
      </AskQuestionButton>
      {questionFormVisible && (
        <QuestionForm>
        </QuestionForm>
      )}
    </RatingsContainer>
  );
};

export default OverallRatings;
