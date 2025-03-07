import React from "react";

const pagination = (props) => {
  let { pageNum, onNext, onPrevious } = props;

  return (
    <div className="flex justify-center py-4">
      <div
        onClick={onPrevious}
        className="border-2 p2 rounded-l-xl border-blue-400"
      >
        Prev
      </div>
      <div className="border-2  border-blue-400">{pageNum}</div>
      <div
        onClick={onNext}
        className="border-2 p2 rounded-r-xl border-blue-400"
      >
        Next
      </div>
    </div>
  );
};

export default pagination;
