import styled from 'styled-components';

export const FormContainer = styled.div`
width: 100%;
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
`;

export const LabelRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;




export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;


export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  vertical-align: middle;
  line-height:1;
  margin: 0;
  padding: 0;
`;

export const StyledInput = styled.input`
  padding: 6px;
  font-size: 16px;
  border: 1px solid black;
  caret-color: #898989;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const QuestionInput = styled.textarea`
height: 134px;
resize: vertical;
padding: 6px;
caret-color: #898989;

  font-size: 16px;
  border: 1px solid black;

&:focus {
    outline: none;
    box-shadow: none;
  }
`

export const SubmitButton = styled.button`
    border: 1px solid black !important;
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
