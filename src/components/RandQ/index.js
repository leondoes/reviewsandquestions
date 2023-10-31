import React from "react";
import PageLayout from "../../layout/pageLayout";
import TabSwitch from "../TabSwitch";
import OverallRatings from "../OverallRatings";
import { Header, RatingTotalsContainer } from "./styled";
import DataProvider from "../../contexts/Data/DataProvider";

const RandQ = () => {
  return (
    <PageLayout>
      <DataProvider>
        <Header>Reviews</Header>

        <RatingTotalsContainer>
          <OverallRatings />
        </RatingTotalsContainer>
        <TabSwitch />
      </DataProvider>
    </PageLayout>
  );
};

export default RandQ;
