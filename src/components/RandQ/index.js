import React, { useState } from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import { Header, RatingTotalsContainer } from "./styled";
import DataProvider from "../../contexts/Data/DataProvider";

const RandQ = () => {
  // State to control the visibility of the QuestionForm
  const [isQuestionFormVisible, setIsQuestionFormVisible] = useState(false);

  // Handler to toggle the QuestionForm visibility
  const toggleQuestionFormVisibility = () => {
    setIsQuestionFormVisible(!isQuestionFormVisible);
  };

  return (
    <PageLayout>
      <DataProvider>
        <Header>Reviews</Header>
        <RatingTotalsContainer>
          <OverallRatings
            isQuestionFormVisible={isQuestionFormVisible}
            onAskQuestionClick={toggleQuestionFormVisibility}
          />
        </RatingTotalsContainer>
        <TabSwitch onAskQuestionClick={toggleQuestionFormVisibility} />
      </DataProvider>
    </PageLayout>
  );
};

export default RandQ;
