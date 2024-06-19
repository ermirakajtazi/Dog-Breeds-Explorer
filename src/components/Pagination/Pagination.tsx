import React from "react";
import { Button } from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <nav
      className="px-2 py-4 flex items-center justify-between border-t"
      aria-label="Pagination"
    >
      <div className="pl-3 text-textColor">
        <span className="pr-2">Page</span>
        {currentPage}
      </div>
      <div className="flex justify-between sm:justify-end">
        <Button
          type="button"
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
          title="Prev"
          className="mr-6"
          testId="prev-button"
        />
        <Button
          title="Next"
          onClick={handleNextPage}
          type="button"
          testId="next-button"
        />
      </div>
    </nav>
  );
};

export default Pagination;
