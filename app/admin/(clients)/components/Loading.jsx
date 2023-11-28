import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#1f2937]">
      <div
        className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent rounded-full text-white"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
