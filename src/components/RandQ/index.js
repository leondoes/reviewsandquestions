import React, { useState } from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import { Header, RatingTotalsContainer } from "./styled";
import DataProvider from "../../contexts/Data/DataProvider";

const RandQ = () => {
  const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false);
  const [simulateReviewsEmpty, setSimulateReviewsEmpty] = useState(false);
  const [simulateQuestionsEmpty, setSimulateQuestionsEmpty] = useState(false);

  const toggleQuestionFormVisibility = () => {
    setIsQuestionFormVisible(!isQuestionFormVisible);
  };

  const toggleReviewsEmptyState = () => {
    setSimulateReviewsEmpty(!simulateReviewsEmpty);
  };

  const toggleQuestionsEmptyState = () => {
    setSimulateQuestionsEmpty(!simulateQuestionsEmpty); // Toggle function for questions
  };

  return (
    <PageLayout>
      <DataProvider>
        <div>
          Simulation Controls
          <button onClick={toggleReviewsEmptyState}>
            {simulateReviewsEmpty ? "Show Reviews" : "Reviews Empty State"}
          </button>
           <button onClick={toggleQuestionsEmptyState}>
            {simulateQuestionsEmpty ? "Show Questions" : "Questions Empty State"}
          </button>
          <button>Simulate Phone view</button>
        </div>
        <Header>Reviews</Header>
        <RatingTotalsContainer>
          <OverallRatings
            isQuestionFormVisible={isQuestionFormVisible}
            onAskQuestionClick={toggleQuestionFormVisibility}
            simulateReviewsEmpty={simulateReviewsEmpty}
          />
        </RatingTotalsContainer>
        <TabSwitch
          onAskQuestionClick={toggleQuestionFormVisibility}
          simulateReviewsEmpty={simulateReviewsEmpty}
          simulateQuestionsEmpty={simulateQuestionsEmpty}
        />
      </DataProvider>
    </PageLayout>
  );
};

export default RandQ;
