import React from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  IconPlaceholder,
  Title,
  Message,
  SimMode,
} from "./styled";

const FormComplete = ({ onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <IconPlaceholder>&#xe60b;</IconPlaceholder>
        <Title>THANK YOU FOR POSTING A QUESTION!</Title>
        <Message>
          Please click on the link in the confirmation email we just sent you to
          submit your question.
        </Message>
        <Message>
          Your question will appear on the site once someone answers it.
          <SimMode>*simulation mode: results in console</SimMode>
        </Message>
      </ModalContainer>
    </Overlay>
  );
};

export default FormComplete;
