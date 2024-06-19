import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  test("renders with current page number", () => {
    render(<Pagination currentPage={1} onPageChange={() => {}} />);
    const pageText = screen.getByText("Page");
    expect(pageText).toBeInTheDocument();
  });

  test("calls onPageChange with the correct page number when Prev button is clicked", () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={2} onPageChange={onPageChange} />);
    const prevButton = screen.getByTestId("prev-button");
    fireEvent.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  test("calls onPageChange with the correct page number when Next button is clicked", () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={2} onPageChange={onPageChange} />);
    const nextButton = screen.getByTestId("next-button");
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  test("Prev button is disabled when current page is 1", () => {
    render(<Pagination currentPage={1} onPageChange={() => {}} />);
    const prevButton = screen.getByTestId("prev-button");
    expect(prevButton).toBeDisabled();
  });
});
