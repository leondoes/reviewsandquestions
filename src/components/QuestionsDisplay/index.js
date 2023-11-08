import React, { useRef } from "react";
import QuestionPagination from "../QuestionsPagination";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
  LoadingContainer,
} from "./styled";
import useFetchQuestions from "../../hooks/useFetchQuestions";

const QuestionsDisplay = ({
  currentPage,
  setCurrentPage,
  onAskQuestionClick,
  simulateEmpty,
}) => {
  const questionsContainerRef = useRef(null);
  const questionsPerPage = 5;
  const questionRef = React.useRef(null);
  const { questions, totalQuestions, formatDate, isLoading } =
    useFetchQuestions(currentPage, simulateEmpty);



  if (isLoading) {
    return <LoadingContainer>Loading questions...</LoadingContainer>;
  }

  return (
    <div>
      <TransitionGroup component={null}>
        {totalQuestions === 0 || simulateEmpty ? (
          <CSSTransition
            nodeRef={questionsContainerRef}
            key="no-questions"
            timeout={500}
            classNames="question"
          >
            <AllQuestions ref={questionsContainerRef}>
              <AskQuestionButton onClick={onAskQuestionClick}>
                Be the first to ask a question
              </AskQuestionButton>
            </AllQuestions>
          </CSSTransition>
        ) : (
          questions.map((question) => (
            <CSSTransition
              key={question.id}
              nodeRef={questionRef}
              timeout={500}
              classNames="question"
            >
              <QuestionItem>
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
            </CSSTransition>
          ))
        )}
      </TransitionGroup>
      {!isLoading && totalQuestions > 0 && questions.length > 0 && (
  <QuestionPagination
    currentPage={currentPage}
    totalPages={Math.ceil(totalQuestions / questionsPerPage)}
    onPageChange={setCurrentPage}
    questionsContainerRef={questionsContainerRef}
  />
)}
    </div>
  );
};

export default QuestionsDisplay;
