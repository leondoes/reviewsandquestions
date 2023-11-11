import React, { useState, useEffect } from "react";
import { PaginationContainer, PageButton, ActiveButton } from "./styled";
import { usePhoneView } from "../../contexts/phoneViewContext";

const QuestionPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  questionsContainerRef,
}) => {
  const { isPhoneView } = usePhoneView();

  const calculateMaxVisiblePages = () =>
    isPhoneView ? 5 : window.innerWidth > 770 ? 9 : 5;

  const [maxVisiblePages, setMaxVisiblePages] = useState(
    calculateMaxVisiblePages()
  );

  useEffect(() => {
    const calculateMaxVisiblePages = () =>
      isPhoneView ? 5 : window.innerWidth > 770 ? 9 : 5;

    const handleResize = () => {
      setMaxVisiblePages(calculateMaxVisiblePages());
    };

    window.addEventListener("resize", handleResize);
    setMaxVisiblePages(calculateMaxVisiblePages());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isPhoneView]);

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
