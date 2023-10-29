import React from 'react';

const ReviewPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 9;

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
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default ReviewPagination;
