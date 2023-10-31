import { useState, useEffect } from 'react';

const useFetchQuestions = (currentPage) => {
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const apiUrl = `https://api.yotpo.com/v1/widget/EolV1WOLJ2UcFKuPJlrtxAIQCCoiDU7c8YqoW2pm/products/727/questions.json?page=${currentPage}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const responseQuestions = data.response.questions;
        if (Array.isArray(responseQuestions)) {
          const decodedQuestions = responseQuestions.map((question) => ({
            ...question,
            content: decodeHTMLEntities(question.content),
            answers: question.answers.map((answer) => ({
              ...answer,
              content: decodeHTMLEntities(answer.content)
            }))
          }));
          setQuestions(decodedQuestions);
          setTotalQuestions(data.response.pagination.total.questions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchQuestions();
  }, [currentPage]);
  

  return { questions, totalQuestions, formatDate };
};

export default useFetchQuestions;
