import { useState, useEffect } from "react";
import mockReviewData from '../mocks/mockReviews.json'

const useFetchReviews = (currentPage) => {
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageScore, setAverageScore] = useState(0);
  const [starDistribution, setStarDistribution] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  const decodeHTMLEntities = (text) => {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const pageKey = `page${currentPage}`;
        const data = mockReviewData[pageKey];
        if (!data) {
          throw new Error('Page data not found');
        }

        const pagination = data.response.pagination;
        const responseReviews = data.response.reviews;

        if (pagination) {
          setTotalReviews(pagination.total);
        }
        if (
          data.response.bottomline &&
          data.response.bottomline.average_score
        ) {
          setAverageScore(data.response.bottomline.average_score);
        }
        if (
          data.response.bottomline &&
          data.response.bottomline.star_distribution
        ) {
          setStarDistribution(data.response.bottomline.star_distribution);
        }
        if (Array.isArray(responseReviews)) {
          const extractedReviews = responseReviews.map((review) => ({
            displayName: decodeHTMLEntities(review.user.display_name),
            starRating: review.score,
            reviewText: decodeHTMLEntities(review.content),
            reviewDate: formatDate(review.created_at),
            reviewTitle: decodeHTMLEntities(review.title),
          }));
          setReviews(extractedReviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [currentPage]);

  return { reviews, totalReviews, averageScore, starDistribution, isLoading };
};

export default useFetchReviews;
