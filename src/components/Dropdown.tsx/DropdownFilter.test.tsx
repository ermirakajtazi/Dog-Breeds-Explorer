import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DropdownFilter } from "./DropdownFilter";

describe("DropdownFilter component", () => {
  test("renders dropdown with options and selected value", () => {
    const options = ["Option1", "Option2", "Option3"];
    const selectedValue = "Option2";

    const mockOnSelectChange = jest.fn();

    render(
      <DropdownFilter
        options={options}
        selectedValue={selectedValue}
        onSelectChange={mockOnSelectChange}
      />
    );

    const dropdown = screen.getByDisplayValue(selectedValue);

    // Check if the dropdown has the correct options
    options.forEach((option) => {
      const dropdownOption = screen.getByText(option);
      expect(dropdownOption).toBeInTheDocument();
    });

    // Simulate changing the selection in the dropdown
    fireEvent.change(dropdown, { target: { value: "Option3" } });

    expect(mockOnSelectChange).toHaveBeenCalledWith("Option3");
  });
});
