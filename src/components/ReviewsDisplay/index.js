import React, { useState, useRef } from "react";
import ReviewPagination from "../ReviewPagination";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

const ReviewsDisplay = ({ currentPage, setCurrentPage, simulateEmpty }) => {
  const reviewsContainerRef = useRef(null);
  const { reviews, totalReviews, isLoading } = useFetchReviews(currentPage, simulateEmpty); // Extract isLoading

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

  const reviewRef = React.useRef(null);

  return (
    <div>
      {isLoading ? (
        <LoadingContainer>Loading reviews...</LoadingContainer>
      ) : (
        <AllReviews ref={reviewsContainerRef}>
          <TransitionGroup component={null}>
            {totalReviews > 0 ? (
              reviews.map((review, index) => (
                <CSSTransition 
                key={review.id}
                timeout={500} 
                classNames="review"
                nodeRef={reviewRef}
              >
                  <ReviewListItem ref={reviewRef}>
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
                </CSSTransition>
              ))
            ) : (
              <CSSTransition nodeRef={reviewRef}  key="no-reviews" timeout={500} classNames="review">
                <NoReviewsMessage>
                  Currently, there are no reviews for this product.
                </NoReviewsMessage>
              </CSSTransition>
            )}
          </TransitionGroup>
        </AllReviews>
      )}
      {!isLoading && totalReviews > 0 && (
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
