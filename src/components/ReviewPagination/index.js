import React, { useState, useEffect } from "react";
import { PaginationContainer, PageButton, ActiveButton } from "./styled";

const ReviewPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  reviewsContainerRef,
}) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(
    window.innerWidth > 770 ? 9 : 5
  );

  useEffect(() => {
    const handleResize = () => {
      setMaxVisiblePages(window.innerWidth > 770 ? 9 : 5);
    };

    // Set up event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    if (reviewsContainerRef && reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    onPageChange(newPage);
  };

  const pageNumbers = [];

  const addPageNumber = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      pageNumbers.push(pageNumber);
    }
  };

  let startPage = currentPage - Math.floor(maxVisiblePages / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + maxVisiblePages - 1;
  endPage = Math.min(endPage, totalPages);

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

export default ReviewPagination;
