import React from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import { Header, RatingTotalsContainer } from "./styled";

const RandQ = () => {
  return (
    <PageLayout>
      <Header>Reviews</Header>

      <RatingTotalsContainer>
        <OverallRatings />
      </RatingTotalsContainer>
      <TabSwitch />
    </PageLayout>
  );
};

export default RandQ;
