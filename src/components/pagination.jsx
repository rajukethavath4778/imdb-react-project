import React from "react";

const pagination = (props) => {
  let { pageNumProp, onNextProp, onPreviousProp } = props;

  return (
    <div className="flex justify-center py-4">
      <div
        onClick={onPreviousProp}
        className="border-2 p2 rounded-l-xl border-blue-400"
      >
        Prev
      </div>
      <div className="border-2  border-blue-400">{pageNumProp}</div>
      <div
        onClick={onNextProp}
        className="border-2 p2 rounded-r-xl border-blue-400"
      >
        Next
      </div>
    </div>
  );
};

export default pagination;
