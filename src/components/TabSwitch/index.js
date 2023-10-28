import React, { useState } from "react";
import { TabStyle, TabSwitchContainer } from "./styled";
import ReviewsDisplay from "../ReviewsDisplay";
import QuestionsDisplay from "../QuestionsDisplay";

const Reviews = () => {
  return <ReviewsDisplay/>
};

const Questions = () => {
  return <QuestionsDisplay/>
};

const TabSwitch = () => {
  const [selectedTab, setSelectedTab] = useState("Reviews");

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

      {selectedTab === "Reviews" && <Reviews />}
      {selectedTab === "Questions" && <Questions />}
    </div>
  );
};

export default TabSwitch;
