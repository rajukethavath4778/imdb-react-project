import React from "react";

const Pagination = (props) => {
  let { pageNum, onNext, onPrevious } = props;

  return (
    <div className="flex justify-center py-4">
      <button
        onClick={onPrevious}
        className="border-2 p-2 rounded-l-xl border-blue-400 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
      >
        Prev
      </button>
      <div className="border-2 p-2 border-blue-400 bg-white text-blue-500 font-bold">
        {pageNum}
      </div>
      <button
        onClick={onNext}
        className="border-2 p-2 rounded-r-xl border-blue-400 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;