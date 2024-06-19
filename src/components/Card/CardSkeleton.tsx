import React from "react";

export const CardSkeleton = () => {
  return (
    <div
      className="bg-gray-200 rounded-lg p-4 m-2 animate-pulse"
      data-testid="card-skeleton"
    >
      <div className="h-32 mb-2 rounded-lg bg-gray-300"></div>
      <div className="h-4 w-3/4 bg-gray-300"></div>
      <div className="h-4 w-2/3 bg-gray-300 mt-2"></div>
    </div>
  );
};
