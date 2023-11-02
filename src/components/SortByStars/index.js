import React, { useContext, useState } from 'react';
import DataContext from '../../contexts/Data/DataContext';
import { StarRatingList, StarRow, WhiteStars,FilledStars, Bar, BarContainer } from './styled'; // <-- Import the new Bar styled component

const SortByStars = () => {
  const { starDistribution } = useContext(DataContext);
  const [hoveredStar, setHoveredStar] = useState(null); // New state to track which star bar is being hovered

  if (!starDistribution) return null;

  return (
    <StarRatingList>
      {Object.entries(starDistribution).reverse().map(([star, count]) => (
        <StarRow 
          key={star} 
          onMouseEnter={() => setHoveredStar(star)} // On entering the row, set the hovered star
          onMouseLeave={() => setHoveredStar(null)}  // On leaving, reset the hovered star
        >
          {Array(5).fill().map((_, index) => (
    index < star 
        ? <FilledStars isHovered={hoveredStar === star || hoveredStar === null} key={index}>&#9733;</FilledStars>
        : <WhiteStars isHovered={hoveredStar === star || hoveredStar === null} key={index}>&#9733;</WhiteStars>
))}
<BarContainer>
          <Bar width={count} isHovered={hoveredStar === star || hoveredStar === null} /> 
        </BarContainer></StarRow>
      ))}
    </StarRatingList>
  );
};

export default SortByStars;
