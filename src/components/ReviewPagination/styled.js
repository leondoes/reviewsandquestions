import styled from 'styled-components';

// Pagination Container
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const ActiveButton = styled(PageButton)`
  font-weight: bold;
  text-decoration:underline;
`;
