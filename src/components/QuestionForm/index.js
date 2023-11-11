import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Title,
  SubTitle,
  StyledForm,
  StyledLabel,
  QuestionInput,
  StyledInput,
  ErrorMessage,
  SubmitButton,
  FormRow,
  BottomRow,
  LabelRow,
  ButtonRow,
  PostErrorMessage,
} from "./styled";
import { usePhoneView } from "../../contexts/phoneViewContext";

const QuestionForm = ({ onFormSubmit, isQuestionFormVisible }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isPhoneView } = usePhoneView();

  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!isQuestionFormVisible) {
      setHasSubmitted(false);
      reset();
    }
  }, [isQuestionFormVisible, reset]);

  const onSubmit = (data) => {
    setHasSubmitted(true);
    console.log("Form data:", data);
    onFormSubmit();
  };

  const onError = (errors, e) => {
    setHasSubmitted(true);
    console.log("Form errors:", errors);
  };

  return (
    <FormContainer>
      <Title>ASK A QUESTION</Title>
      <SubTitle>* Indicates a required field</SubTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow>
          <LabelRow>
            <StyledLabel>* Question:</StyledLabel>
            {errors.question && (
              <ErrorMessage>{errors.question.message}</ErrorMessage>
            )}
          </LabelRow>
          <QuestionInput
            {...register("question", {
              required: "Question's body can't be empty",
            })}
          />
        </FormRow>

        <BottomRow simulatePhoneView={isPhoneView}>
          <FormRow>
            <LabelRow>
              <StyledLabel>* Use your name:</StyledLabel>
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </LabelRow>
            <StyledInput
              simulatePhoneView={isPhoneView}
              type="text"
              {...register("name", { required: "Name field cannot be empty" })}
            />
          </FormRow>

          <FormRow>
            <LabelRow>
              <StyledLabel>* Email:</StyledLabel>
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </LabelRow>
            <StyledInput
              simulatePhoneView={isPhoneView}
              type="email"
              {...register("email", {
                required: "Email field cannot be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
          </FormRow>
        </BottomRow>
        <ButtonRow>
          {hasSubmitted && Object.keys(errors).length > 0 && (
            <PostErrorMessage>
              One or more of your answers does not meet the required criteria
            </PostErrorMessage>
          )}
          <SubmitButton type="submit">POST</SubmitButton>
        </ButtonRow>
      </StyledForm>
    </FormContainer>
  );
};

export default QuestionForm;
