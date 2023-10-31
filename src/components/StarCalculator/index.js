import React from 'react';

const StarCalculator = ({ averageScore }) => {
  const fullStars = Math.floor(averageScore);
  const isHalfStar = (averageScore - fullStars) >= 0.5;
  const emptyStars = 5 - fullStars - (isHalfStar ? 1 : 0);

  return (
    <div>
      {/* Render full stars */}
      {Array(fullStars).fill('★').map((star, idx) => <span key={idx}>{star}</span>)}

      {/* Render half star */}
      {isHalfStar && <span>half a star</span>}

      {/* Render empty stars */}
      {Array(emptyStars).fill('☆').map((star, idx) => <span key={idx + fullStars}>{star}</span>)}
    </div>
  );
};

export default StarCalculator;
