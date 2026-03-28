import React from 'react';

const Footer = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <footer>
      <button onClick={onPrevPage} disabled={currentPage <= 1}>
        Previous
      </button>

      <span>Page {currentPage} of {totalPages}</span>

      <button onClick={onNextPage} disabled={currentPage >= totalPages}>
        Next
      </button>
    </footer>
  );
};

export default Footer;
