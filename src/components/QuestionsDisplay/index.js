import React from "react";
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
import useFetchQuestions from "../../hooks/useFetchQuestions";

const QuestionDisplay = ({ currentPage, setCurrentPage }) => {
  const questionsPerPage = 5;

  const { questions, totalQuestions, formatDate } = useFetchQuestions(currentPage);

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
