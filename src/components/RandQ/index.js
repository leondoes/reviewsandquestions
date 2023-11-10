import React, { useState } from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import { Header, RatingTotalsContainer, PhoneViewWrapper, ContentWrapper } from "./styled";
import DataProvider from "../../contexts/Data/DataProvider";
import { usePhoneView } from "../../contexts/phoneViewContext";

const RandQ = () => {
  const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false);
  const [simulateReviewsEmpty, setSimulateReviewsEmpty] = useState(false);
  const [simulateQuestionsEmpty, setSimulateQuestionsEmpty] = useState(false);

  const {isPhoneView, togglePhoneView} = usePhoneView();

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
              {simulateQuestionsEmpty
                ? "Show Questions"
                : "Questions Empty State"}
            </button>
            <button onClick={togglePhoneView}>
              {isPhoneView ? "Exit Phone View" : "Simulate Phone View"}
            </button>
          </div>
          <PhoneViewWrapper simulatePhoneView={isPhoneView}>
            <ContentWrapper>
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
            /></ContentWrapper>
          </PhoneViewWrapper>
        </DataProvider>
    </PageLayout>
  );
};

export default RandQ;
