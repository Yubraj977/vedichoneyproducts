import React from 'react';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example " className='w-full flex '>
      <ul className="inline-flex -space-x-px text-base h-10   w-full justify-center">
        <li>
          <button
            onClick={handlePrevPage}
            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-800 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-900 ${
              currentPage === 1 ? 'cursor-not-allowed opacity-40' : ''
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1}>
            <button
              onClick={() => onPageChange(index + 1)}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                currentPage === index + 1
                  ? 'text-secondary_shade border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-secondary'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextPage}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-800 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-900 ${
              currentPage === totalPages ? 'cursor-not-allowed opacity-40' : ''
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
