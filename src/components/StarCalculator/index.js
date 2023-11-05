import React from "react";
import { StarFont } from "./styled";

const StarCalculator = ({ averageScore }) => {
  const hasScore = averageScore > 0;
  const fullStars = hasScore ? Math.floor(averageScore) : 0;
  const isHalfStar = hasScore && averageScore - fullStars >= 0.5;
  const emptyStars = hasScore ? 5 - fullStars - (isHalfStar ? 1 : 0) : 5;

  return (
    <StarFont>
      {Array(fullStars)
        .fill("★")
        .map((star, idx) => (
          <span className="star" key={"full" + idx}>
            &#xE60E;
          </span>
        ))}

      {isHalfStar && (
        <span className="star" key={"half"}>
          &#xE61A;
        </span>
      )}

      {Array(emptyStars)
        .fill("☆")
        .map((star, idx) => (
          <span className="star" key={"empty" + idx}>
            &#xE61B;
          </span>
        ))}
    </StarFont>
  );
};

export default StarCalculator;
