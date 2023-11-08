import { useState, useEffect } from "react";
import mockReviewData from '../mocks/mockReviews.json';

const useFetchReviews = (currentPage, simulateEmpty) => {
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
      try {
        // Fetching logic starts here
        setIsLoading(true);
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
        if (data.response.bottomline?.average_score) {
          setAverageScore(data.response.bottomline.average_score);
        }
        if (data.response.bottomline?.star_distribution) {
          setStarDistribution(data.response.bottomline.star_distribution);
        }
        if (Array.isArray(responseReviews)) {
          const extractedReviews = responseReviews.map((review) => ({
            id: review.id,
            displayName: decodeHTMLEntities(review.user.display_name),
            starRating: review.score,
            reviewText: decodeHTMLEntities(review.content),
            reviewDate: formatDate(review.created_at),
            reviewTitle: decodeHTMLEntities(review.title),
          }));
          setReviews(extractedReviews);
        }
        // Fetching logic ends here
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (simulateEmpty) {
      // When simulateEmpty is true, we simulate an empty state
      setReviews([]);
      setTotalReviews(0);
      setAverageScore(0);
      setStarDistribution({});
      setIsLoading(false);
    } else {
      // When simulateEmpty is false, we proceed to fetch reviews
      fetchReviews().catch(console.error);
    }
  }, [currentPage, simulateEmpty]); // Corrected the dependencies of useEffect

  return { reviews, totalReviews, averageScore, starDistribution, isLoading };
};

export default useFetchReviews;
