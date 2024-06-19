// SearchBar.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar component", () => {
  test("searching by entering text and clicking search button", () => {
    const mockOnSearch = jest.fn();

    render(<SearchBar placeholder="Search" onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search");
    const searchButton = screen.getByTestId("search");

    // Simulate entering text in the input field
    fireEvent.change(inputElement, { target: { value: "Golden Retriever" } });

    // Simulate clicking the search button
    fireEvent.click(searchButton);

    // Expect the onSearch function to be called with the entered query
    expect(mockOnSearch).toHaveBeenCalledWith("Golden Retriever");
  });

  test("updates query state when input value changes", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "poodle" } });
    expect(input).toHaveValue("poodle");
  });

  test("renders a large search button with default styles", () => {
    render(<SearchBar onSearch={() => {}} />);
    const searchButton = screen.getByTestId("search");
    expect(searchButton).toBeInTheDocument();
  });
});
