// DataProvider.js
import React from 'react';
import DataContext from './DataContext';
import useFetchQuestions from "../../hooks/useFetchQuestions";
import useFetchReviews from '../../hooks/useFetchReviews';

const DataProvider = ({ children }) => {
  const { questions, totalQuestions } = useFetchQuestions(1);
  const { reviews, totalReviews, averageScore, starDistribution } = useFetchReviews(1);

  return (
    <DataContext.Provider value={{ reviews, totalReviews, questions, totalQuestions, averageScore, starDistribution }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
