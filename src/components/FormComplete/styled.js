import styled from 'styled-components';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  padding: 20px 40px;
  border: solid 1px #E3E3E3;
  text-align: center;
  position: relative;
  margin: auto;
  width: 100%;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
  border: none;
  background: none;
`;

export const IconPlaceholder = styled.div`
font-family: 'yotpo-widget-font';
  font-size: 48px; /* Icon size */
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #000;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;