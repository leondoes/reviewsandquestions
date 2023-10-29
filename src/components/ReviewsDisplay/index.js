import React, { useEffect, useState } from "react";
import ReviewPagination from "../ReviewPagination";
import {
  AllReviews,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ReviewListItem,
  Stars,
  Title,
  Content
} from "./styled";

const ReviewsDisplay = ({ currentPage, setCurrentPage }) => {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);

  const reviewsPerPage = 5;

  const renderStarRating = (rating) => {
    const filledStars = "★".repeat(rating);
    const outlineStars = "☆".repeat(5 - rating);
    return filledStars + outlineStars;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  const [expandedContent, setExpandedContent] = useState({});

  const handleExpandContent = (index) => {
    setExpandedContent((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiUrl = `https://api.yotpo.com/v1/widget/EolV1WOLJ2UcFKuPJlrtxAIQCCoiDU7c8YqoW2pm/products/727/reviews.json?page=${currentPage}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const pagination = data.response.pagination;
        const responseReviews = data.response.reviews;
        if (pagination) {
          const total = pagination.total;
          setTotalReviews(total); // Update totalReviews state with the fetched total
        }
        if (Array.isArray(responseReviews)) {
          const extractedReviews = responseReviews.map((review) => ({
            DisplayName: review.user.display_name,
            starRating: review.score,
            reviewText: review.content,
            reviewDate: formatDate(review.created_at),
            reviewTitle: review.title,
          }));
          setReviews(extractedReviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchReviews(); // Initial fetch when the component loads

    if (currentPage <= Math.ceil(totalReviews / reviewsPerPage)) {
      fetchReviews();
    }
  }, [currentPage, totalReviews]);

  return (
    <div>
      <AllReviews>
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
        totalPages={Math.ceil(totalReviews / reviewsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ReviewsDisplay;
