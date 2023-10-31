import { useState, useEffect } from 'react';

const useFetchReviews = (currentPage) => {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  
  const reviewsPerPage = 5;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  // Function to decode HTML entities
  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

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
          setTotalReviews(total);
        } 
        if (data.response.bottomline && data.response.bottomline.average_score) {
          setAverageScore(data.response.bottomline.average_score);  // Set the average score
        }
        if (Array.isArray(responseReviews)) {
          const extractedReviews = responseReviews.map((review) => ({
            DisplayName: decodeHTMLEntities(review.user.display_name),
            starRating: review.score,
            reviewText: decodeHTMLEntities(review.content),
            reviewDate: formatDate(review.created_at),
            reviewTitle: decodeHTMLEntities(review.title),
          }));
          setReviews(extractedReviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (currentPage <= Math.ceil(totalReviews / reviewsPerPage) || totalReviews === 0) {
        fetchReviews();
    }
  }, [currentPage, totalReviews, averageScore]);

  return { reviews, totalReviews, averageScore };
}

export default useFetchReviews;
