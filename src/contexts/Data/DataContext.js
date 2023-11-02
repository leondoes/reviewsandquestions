import { createContext } from 'react';

const DataContext = createContext({
  starDistribution: {},
  reviews: [],
  totalReviews: 0,
  averageScore: 0,
  questions: [],
  totalQuestions: 0,
  fetchData: () => {},
});

export default DataContext;
