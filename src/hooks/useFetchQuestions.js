import { useQuery } from "react-query";
import mockQuestionData from "../mocks/mockQuestions.json";

const useFetchQuestions = (currentPage) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  };

  function decodeHTMLEntities(text) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  const fetchQuestions = async ({ queryKey }) => {
    const [, page] = queryKey;
    const pageData = mockQuestionData[`page${page}`];

    if (!pageData || !pageData.response) {
      throw new Error(`Data for page ${page} not found`);
    }

    const responseQuestions = pageData.response.questions.map((question) => ({
      ...question,
      id: question.id,
      content: decodeHTMLEntities(question.content),
      answers: question.answers.map((answer) => ({
        ...answer,
        id: answer.id,
        content: decodeHTMLEntities(answer.content),
      })),
    }));

    return {
      questions: responseQuestions,
      totalQuestions: pageData.response.pagination.total.questions,
    };
  };

  const { data, isLoading, isError, error } = useQuery(
    ["questions", currentPage],
    fetchQuestions,
    {
      keepPreviousData: true,
    }
  );

  const questions = data?.questions || [];
  const totalQuestions = data?.totalQuestions || 0;

  return { questions, totalQuestions, formatDate, isLoading, isError, error };
};

export default useFetchQuestions;
