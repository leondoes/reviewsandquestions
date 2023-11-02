import styled from "styled-components";

export const AllQuestions = styled.div`
padding-top: 20px;
min-height: 800px;
`;

export const QuestionItem = styled.div`
  padding-top: 35px 0px;
`;

export const AskerInfo = styled.div`
padding-top: 30px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const QuestionDate = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const QuestionText = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export const AnswerInfo = styled.div`
  font-size: 12px;
  color: #474747;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
`;

export const AnswerText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  font-weight: 400;
  padding-bottom: 35px;
  padding-left: 35px;
`;

export const AnswerDate = styled.div`
  font-size: 12px;
  font-weight: 300;

`;

export const AnswerContainer = styled.div`
  padding: 25px 0;
  padding-bottom: 30px;
  min-height: 150px;
`;

export const AnswerLeftBorder = styled.div `
position: absolute;
 border-left: 2px solid #ECE9E0;
 height: 142px;
`;

export const AnswerBottomBorder = styled.div `
border-bottom: 2px solid #e9e9e9;

${QuestionItem}:last-child & {
    border-bottom: none;
  }
`;
