import React, { useRef } from "react";
import QuestionPagination from "../QuestionsPagination";
import {
  AllQuestions,
  QuestionItem,
  AskerInfo,
  QuestionText,
  QuestionDate,
  AnswerInfo,
  AnswerText,
  AnswerDate,
  AnswerDateMini,
  AnswerContainer,
  AnswerLeftBorder,
  AnswerBottomBorder,
  AnswerContent,
  AskQuestionButton,
  LoadingContainer
} from "./styled";
import useFetchQuestions from "../../hooks/useFetchQuestions";

const QuestionsDisplay = ({
  currentPage,
  setCurrentPage,
  onAskQuestionClick
}) => {
  const questionsContainerRef = useRef(null);
  const questionsPerPage = 5;
  const { questions, totalQuestions, formatDate, loading } = useFetchQuestions(currentPage);

  if (loading) {
    return <LoadingContainer>Loading questions...</LoadingContainer>;
  }
  return (
    <div>
      {totalQuestions > 0 ? (
        <>
          <AllQuestions ref={questionsContainerRef}>
            {questions.map((question) => (
              <QuestionItem key={question.id}>
                <AskerInfo>
                  {question.asker.display_name}
                  <QuestionDate>{formatDate(question.created_at)}</QuestionDate>
                </AskerInfo>
                <QuestionText>Q: {question.content}</QuestionText>
                {question.answers.length > 0 && (
                  <AnswerContainer>
                    <AnswerLeftBorder />
                    <AnswerContent>
                      <AnswerInfo>
                        Mejuri{" "}
                        <AnswerDate>
                          {formatDate(question.answers[0].created_at)}
                        </AnswerDate>
                      </AnswerInfo>
                      <AnswerText>A: {question.answers[0].content}</AnswerText>
                      <AnswerDateMini>
                        {formatDate(question.answers[0].created_at)}
                      </AnswerDateMini>
                    </AnswerContent>
                  </AnswerContainer>
                )}
                <AnswerBottomBorder />
              </QuestionItem>
            ))}
          </AllQuestions>
          <QuestionPagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalQuestions / questionsPerPage)}
            onPageChange={setCurrentPage}
            questionsContainerRef={questionsContainerRef}
          />
        </>
      ) : (
        !loading && (
          <AllQuestions>
            <AskQuestionButton onClick={onAskQuestionClick}>
              Be the first to ask a question
            </AskQuestionButton>
          </AllQuestions>
        )
      )}
    </div>
  );
};

export default QuestionsDisplay;
