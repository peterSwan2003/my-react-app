import React from "react";

const PaginationApi = ({ currentPage, totalPage, onPageChange }) => {
  return (
    <div className="pag">
      <button
        disabled={currentPage == 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previose
      </button>
      <span>
        page {currentPage}of {totalPage}
      </span>
      <button
        disabled={currentPage == totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationApi;
