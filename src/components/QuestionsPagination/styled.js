import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  background: none;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ActiveButton = styled(PageButton)`
  font-weight: bold;
  text-decoration: underline;
`;
