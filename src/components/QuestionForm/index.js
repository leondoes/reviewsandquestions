import React, {useState} from "react";
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

const QuestionForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onSubmit = (data) => {
    setHasSubmitted(true); // Move this to the top to ensure it's set before any redirects or other operations
    console.log("Form data:", data); // This will now only log when there are no errors
    onFormSubmit(); // Assuming you want to submit the data regardless of validation for some reason
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

        <BottomRow>
          <FormRow>
            <LabelRow>
              <StyledLabel>* Use your name:</StyledLabel>
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </LabelRow>
            <StyledInput
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
