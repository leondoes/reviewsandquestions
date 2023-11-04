import React, { useState, useRef } from "react";
import ReviewPagination from "../ReviewPagination";
import {
  AllReviews,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ReviewListItem,
  Stars,
  Title,
  Content,
} from "./styled";
import useFetchReviews from "../../hooks/useFetchReviews";

const ReviewsDisplay = ({ currentPage, setCurrentPage }) => {
  const reviewsContainerRef = useRef(null);
  const { reviews, totalReviews } = useFetchReviews(currentPage);

  const renderStarRating = (rating) => {
    const filledStars = String.fromCharCode(0xE60E).repeat(rating);
    const outlineStars = String.fromCharCode(0xE61B).repeat(5 - rating); // Assuming you still want to use the outline star character
    return filledStars + outlineStars;
  };
  

  const [expandedContent, setExpandedContent] = useState({});

  const handleExpandContent = (index) => {
    setExpandedContent((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <AllReviews ref={reviewsContainerRef}>
        {reviews.map((review, index) => (
          <ReviewListItem key={index}>
            <LeftColumn>{review.DisplayName}</LeftColumn>
            <MiddleColumn>
              <Stars>{renderStarRating(review.starRating)}</Stars>
              <Title>{review.reviewTitle}</Title>
              <Content>
                {review.reviewText.length > 400
                  ? expandedContent[index]
                    ? review.reviewText
                    : `${review.reviewText.slice(0, 400)}... `
                  : review.reviewText}
                {review.reviewText.length > 400 && (
                  <button onClick={() => handleExpandContent(index)}>
                    {expandedContent[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </Content>
            </MiddleColumn>
            <RightColumn>{review.reviewDate}</RightColumn>
          </ReviewListItem>
        ))}
      </AllReviews>
      <ReviewPagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalReviews / 5)}
        onPageChange={setCurrentPage}
        reviewsContainerRef={reviewsContainerRef}
      />
    </div>
  );
};

export default ReviewsDisplay;