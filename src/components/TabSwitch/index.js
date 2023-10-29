import React, { useState } from "react";
import { TabStyle, TabSwitchContainer } from "./styled";
import ReviewsDisplay from "../ReviewsDisplay";
import QuestionsDisplay from "../QuestionsDisplay";

const TabSwitch = () => {
  const [selectedTab, setSelectedTab] = useState("Reviews");
  const [currentPage, setCurrentPage] = useState(1);

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

      {selectedTab === "Reviews" && <ReviewsDisplay currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {selectedTab === "Questions" && <QuestionsDisplay />}
    </div>
  );
};

export default TabSwitch;
