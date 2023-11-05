import { useQuery } from "react-query";

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
    const apiUrl = `https://api.yotpo.com/v1/widget/EolV1WOLJ2UcFKuPJlrtxAIQCCoiDU7c8YqoW2pm/products/727/questions.json?page=${page}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    const responseQuestions = data.response.questions.map((question) => ({
      ...question,
      content: decodeHTMLEntities(question.content),
      answers: question.answers.map((answer) => ({
        ...answer,
        content: decodeHTMLEntities(answer.content),
      })),
    }));
    return {
      questions: responseQuestions,
      totalQuestions: data.response.pagination.total.questions,
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
