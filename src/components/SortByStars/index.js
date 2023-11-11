import React, { useContext, useState } from "react";
import DataContext from "../../contexts/Data/DataContext";
import {
  StarRatingList,
  StarRow,
  WhiteStars,
  FilledStars,
  Bar,
  BarContainer,
} from "./styled";

const SortByStars = () => {
  const { starDistribution } = useContext(DataContext);
  const [selectedStar, setSelectedStar] = useState(null);
  const [hoveredStar, setHoveredStar] = useState(null);

  if (!starDistribution) return null;

  const handleStarClick = (star) => {
    if (selectedStar === star) {
      console.log(`Deselecting the ${star} star sort`);
      setSelectedStar(null);
    } else {
      console.log(`Sorting by ${star} stars`);
      setSelectedStar(star);
    }
  };

  const handleKeyDown = (event, star) => {
    if (event.key === "Enter") {
      handleStarClick(star);
      // Prevent default action to avoid any unwanted side effects
      event.preventDefault();
    }
  };

  const getOpacity = (star) => {
    if (hoveredStar !== null) {
      return hoveredStar === star ? 1 : 0.5;
    } else {
      return selectedStar === star || selectedStar === null ? 1 : 0.5;
    }
  };

  return (
    <StarRatingList>
      {Object.entries(starDistribution)
        .reverse()
        .map(([star, count]) => (
          <StarRow
            key={star}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            onKeyDown={(event) => handleKeyDown(event, star)}
            tabIndex="0" // Make it focusable
            style={{
              opacity: getOpacity(star),
            }}
          >
            {Array.from({ length: 5 }, (_, index) => index < star).map(
              (filled, index) => {
                const StarComponent = filled ? FilledStars : WhiteStars;
                return (
                  <StarComponent
                    key={index}
                    style={{
                      opacity: 1,
                    }}
                  >
                    &#9733;
                  </StarComponent>
                );
              }
            )}
            <BarContainer>
              <Bar
                width={count}
                style={{
                  opacity: getOpacity(star),
                }}
              />
            </BarContainer>
          </StarRow>
        ))}
    </StarRatingList>
  );
};

export default SortByStars;
