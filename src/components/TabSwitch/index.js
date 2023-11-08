import React, { useState } from "react";
import { TabStyle, TabSwitchContainer } from "./styled";
import ReviewsDisplay from "../ReviewsDisplay";
import QuestionsDisplay from "../QuestionsDisplay";

const TabSwitch = ({ onAskQuestionClick, simulateReviewsEmpty, simulateQuestionsEmpty }) => {
  const [selectedTab, setSelectedTab] = useState("Reviews");
  const [reviewsCurrentPage, setReviewsCurrentPage] = useState(1);
  const [questionsCurrentPage, setQuestionsCurrentPage] = useState(1);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <TabSwitchContainer>
        <TabStyle
          onClick={() => handleTabChange("Reviews")}
          isSelected={selectedTab === "Reviews"}
        >
          Reviews
        </TabStyle>
        <TabStyle
          onClick={() => handleTabChange("Questions")}
          isSelected={selectedTab === "Questions"}
        >
          Questions
        </TabStyle>
      </TabSwitchContainer>

      {selectedTab === "Reviews" && (
        <ReviewsDisplay
          key="reviews"
          currentPage={reviewsCurrentPage}
          setCurrentPage={setReviewsCurrentPage}
          simulateEmpty={simulateReviewsEmpty}
        />
      )}
      {selectedTab === "Questions" && (
        <QuestionsDisplay
        key="questions"
        currentPage={questionsCurrentPage}
        setCurrentPage={setQuestionsCurrentPage}
        onAskQuestionClick={onAskQuestionClick}
        simulateEmpty={simulateQuestionsEmpty}
      />
      )}
    </div>
  );
};

export default TabSwitch;
