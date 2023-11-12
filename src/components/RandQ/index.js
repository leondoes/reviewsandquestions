import React, { useState} from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import {
  Header,
  RatingTotalsContainer,
  PhoneViewWrapper,
  ContentWrapper,
} from "./styled";
import DataProvider from "../../contexts/Data/DataProvider";
import { usePhoneView } from "../../contexts/phoneViewContext";
import TestingMenu from "../TestingMenu";

const RandQ = () => {
  const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false);
  const [simulateReviewsEmpty, setSimulateReviewsEmpty] = useState(false);
  const [simulateQuestionsEmpty, setSimulateQuestionsEmpty] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Reviews");

  const toggleReviewsEmptyState = () => {
    setSimulateReviewsEmpty(!simulateReviewsEmpty);
    setSelectedTab("Reviews");
  };

  const toggleQuestionsEmptyState = () => {
    setSimulateQuestionsEmpty(!simulateQuestionsEmpty);
    setSelectedTab("Questions");
  };


  const { isPhoneView, togglePhoneView } = usePhoneView();

  const handleTogglePhoneView = () => {
    if (window.innerWidth > 768) {
      togglePhoneView(!isPhoneView);
    }
  };

  const toggleQuestionFormVisibility = () => {
    setIsQuestionFormVisible(!isQuestionFormVisible);
  };

  return (
    <PageLayout>
      <DataProvider>
        <TestingMenu
          toggleReviewsEmptyState={toggleReviewsEmptyState}
          toggleQuestionsEmptyState={toggleQuestionsEmptyState}
          handleTogglePhoneView={handleTogglePhoneView}
        />
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
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </ContentWrapper>
        </PhoneViewWrapper>
      </DataProvider>
    </PageLayout>
  );
};

export default RandQ;