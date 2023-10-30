import React, { useEffect, useState } from "react";
import QuestionsPagination from "../QuestionsPagination";
import {
  AllQuestions,
  QuestionItem,
  AskerInfo,
  QuestionText,
  QuestionDate,
  AnswerInfo,
  AnswerText,
  AnswerDate,
  AnswerContainer,
  AnswerLeftBorder,
  AnswerBottomBorder,
} from "./styled";

const QuestionDisplay = ({ currentPage, setCurrentPage }) => {
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const questionsPerPage = 5;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
    return `${mm}/${dd}/${yy}`;
  };

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
          setQuestions(responseQuestions);
          setTotalQuestions(data.response.pagination.total.questions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchQuestions();
  }, [currentPage]);

  return (
    <div>
      <AllQuestions>
        {questions.map((question) => (
          <QuestionItem key={question.id}>
            <AskerInfo>
              {question.asker.display_name}
              <QuestionDate>{formatDate(question.created_at)}</QuestionDate>
            </AskerInfo>
            <QuestionText>Q: {question.content}</QuestionText>
           
            <AnswerContainer><AnswerLeftBorder/>
               <AnswerInfo>
                Mejuri
                <AnswerDate>
                  {formatDate(question.answers[0].created_at)}
                </AnswerDate>
              </AnswerInfo>
              <AnswerText>A: {question.answers[0].content}</AnswerText>
            </AnswerContainer>
            <AnswerBottomBorder/>
          </QuestionItem>
        ))}
      </AllQuestions>
      <QuestionsPagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalQuestions / questionsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default QuestionDisplay;
