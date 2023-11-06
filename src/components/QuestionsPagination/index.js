import React, { useState, useEffect } from "react";
import { PaginationContainer, PageButton, ActiveButton } from "./styled";

const QuestionPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  questionsContainerRef,
}) => {
  // Initialize state with the appropriate value based on the current window width
  const [maxVisiblePages, setMaxVisiblePages] = useState(
    window.innerWidth > 770 ? 9 : 5
  );

  // Effect to adjust `maxVisiblePages` on window resize
  useEffect(() => {
    const handleResize = () => {
      setMaxVisiblePages(window.innerWidth > 770 ? 9 : 5);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    if (questionsContainerRef && questionsContainerRef.current) {
      questionsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    onPageChange(newPage);
  };

  const pageNumbers = [];

  const addPageNumber = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      pageNumbers.push(pageNumber);
    }
  };

  // Calculate the start page for pagination
  let startPage = currentPage - Math.floor(maxVisiblePages / 2);
  startPage = Math.max(startPage, 1);

  // Calculate the end page for pagination
  let endPage = startPage + maxVisiblePages - 1;
  endPage = Math.min(endPage, totalPages);

  // Add page numbers for the calculated range
  for (let i = startPage; i <= endPage; i++) {
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
