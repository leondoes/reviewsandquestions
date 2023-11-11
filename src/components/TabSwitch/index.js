import React, { useState, useEffect } from "react";
import { TabStyle, TabSwitchContainer } from "./styled";
import ReviewsDisplay from "../ReviewsDisplay";
import QuestionsDisplay from "../QuestionsDisplay";

const TabSwitch = ({
  onAskQuestionClick,
  simulateReviewsEmpty,
  simulateQuestionsEmpty,
  selectedTab: externalSelectedTab,
  setSelectedTab: externalSetSelectedTab,
}) => {
  const [internalSelectedTab, internalSetSelectedTab] = useState("Reviews");
  const [reviewsCurrentPage, setReviewsCurrentPage] = useState(1);
  const [questionsCurrentPage, setQuestionsCurrentPage] = useState(1);

  const isControlled = externalSetSelectedTab != null;

  const selectedTab = isControlled ? externalSelectedTab : internalSelectedTab;
  const setSelectedTab = isControlled
    ? externalSetSelectedTab
    : internalSetSelectedTab;

  useEffect(() => {
    if (isControlled && externalSelectedTab != null) {
      internalSetSelectedTab(externalSelectedTab);
    }
  }, [externalSelectedTab, isControlled]);

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
