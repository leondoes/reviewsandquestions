import { createContext } from 'react';

const DataContext = createContext({
  reviews: [],
  totalReviews: 0,
  questions: [],
  totalQuestions: 0,
  fetchData: () => {},
});

export default DataContext;
