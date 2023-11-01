import React from 'react';
import { StarFont } from './styled';

const StarCalculator = ({ averageScore }) => {
  const fullStars = Math.floor(averageScore);
  const isHalfStar = (averageScore - fullStars) >= 0.5;
  const emptyStars = 5 - fullStars - (isHalfStar ? 1 : 0);

  return (
    <StarFont>
      {/* Render full stars using custom star Unicode */}
      {Array(fullStars).fill('★').map((star, idx) => <span className="star" key={idx}>&#xE60E;</span>)}

      {/* Render half star */}
      {isHalfStar && <span>&#xE61A;</span>}

      {/* Render empty stars (assuming you also have a custom Unicode for this) */}
      {Array(emptyStars).fill('☆').map((star, idx) => <span className="star" key={idx + fullStars}>&#xE61B;</span>)}
    </StarFont>
  );
};

export default StarCalculator;
