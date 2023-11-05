import React from "react";
import { PaginationContainer, PageButton, ActiveButton } from "./styled";

const QuestionPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  questionsContainerRef,
}) => {
  const handlePageChange = (newPage) => {
    if (questionsContainerRef && questionsContainerRef.current) {
      questionsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    onPageChange(newPage);
  };

  const pageNumbers = [];
  const maxVisiblePages = 5;

  const addPageNumber = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      pageNumbers.push(pageNumber);
    }
  };

  let startPage = currentPage - Math.floor(maxVisiblePages / 2);
  if (startPage < 1) {
    startPage = 1;
  }

  for (let i = startPage; i < startPage + maxVisiblePages; i++) {
    addPageNumber(i);
  }

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </PageButton>
      {pageNumbers.map((page) =>
        currentPage === page ? (
          <ActiveButton key={page} onClick={() => handlePageChange(page)}>
            {page}
          </ActiveButton>
        ) : (
          <PageButton key={page} onClick={() => handlePageChange(page)}>
            {page}
          </PageButton>
        )
      )}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default QuestionPagination;
