import React from "react";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  QuestionInput,
  StyledInput,
  ErrorMessage,
  SubmitButton,
  FormRow,
  BottomRow,
  LabelRow,
} from "./styled";

const QuestionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <SubmitButton type="submit">POST</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default QuestionForm;
