import styled from "styled-components";
import { themeFont } from "../../common/theme";

export const FormContainer = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  min-width: 100px;
  padding-bottom: 25px;
  width: auto;
  text-align: start;
`;

export const SubTitle = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal !important;
  font-size: 14px;
  line-height: 17px;
  color: #6a6c77;
  border: none;
  padding-bottom: 25px;
  margin: 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const LabelRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  vertical-align: middle;
  line-height: 1;
  margin: 0;
  padding: 0;
`;

export const StyledInput = styled.input`
  color: #737373;
  font-size: 13px;
  font-family: ${themeFont.ContentFont};
  padding: 12px 9px;
  border: 1px solid black;
  caret-color: #898989;
  margin-top: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const QuestionInput = styled.textarea`
  color: #737373;
  font-size: 13px;
  font-family: ${themeFont.ContentFont};
  height: 67px;
  resize: vertical;
  padding: 12px 9px;
  caret-color: #898989;
  margin-top: 10px;

  border: 1px solid black;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SubmitButton = styled.button`
  color: #000000 !important;
  box-sizing: border-box;
  border: 1px solid black;
  background: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1px;
  border-radius: 0;
  height: 48px;
  width: 88px;
  min-height: auto;
  min-width: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 2px;

  &:hover {
    background-color: #ededed;
  }
`;

export const ErrorMessage = styled.span`
  margin: 0;
  padding: 0;
  vertical-align: middle;
  color: red;
  font-size: 14px;
  margin: 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
`;

export const PostErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  align-self: flex-start;
`;
