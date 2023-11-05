import React, { useState, useRef } from "react";
import ReviewPagination from "../ReviewPagination";
import {
  AllReviews,
  NameColumn,
  ContentColumn,
  DateColumn,
  ReviewListItem,
  Stars,
  Title,
  Content,
  NoReviewsMessage,
  LoadingContainer,
} from "./styled";
import useFetchReviews from "../../hooks/useFetchReviews";

const ReviewsDisplay = ({ currentPage, setCurrentPage }) => {
  const reviewsContainerRef = useRef(null);
  const { reviews, totalReviews, isLoading } = useFetchReviews(currentPage); // Extract isLoading

  const renderStarRating = (rating) => {
    const filledStars = String.fromCharCode(0xe60e).repeat(rating);
    const emptyStars = String.fromCharCode(0xe61b).repeat(5 - rating);
    return filledStars + emptyStars;
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
      {isLoading ? (
        <LoadingContainer>Loading reviews...</LoadingContainer>
      ) : (
        <AllReviews ref={reviewsContainerRef}>
          {totalReviews > 0 ? (
            reviews.map((review, index) => (
              <ReviewListItem key={index}>
                <NameColumn>{review.displayName}</NameColumn>
                <ContentColumn>
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
                </ContentColumn>
                <DateColumn>{review.reviewDate}</DateColumn>
              </ReviewListItem>
            ))
          ) : (
            <NoReviewsMessage>
              Currently, there are no reviews for this product.
            </NoReviewsMessage>
          )}
        </AllReviews>
      )}
      {!isLoading &&
        totalReviews > 0 && ( // Pagination should not show when loading
          <ReviewPagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalReviews / 5)}
            onPageChange={setCurrentPage}
            reviewsContainerRef={reviewsContainerRef}
          />
        )}
    </div>
  );
};

export default ReviewsDisplay;
