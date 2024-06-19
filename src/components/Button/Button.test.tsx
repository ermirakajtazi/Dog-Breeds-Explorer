import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  test("renders button with default styles", () => {
    render(<Button title="Click me" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveTextContent("Click me");
  });

  test("renders button with outlined styles", () => {
    render(<Button title="Click me" outlined />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-primary");
    expect(button).toHaveTextContent("Click me");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" onClick={handleClick} />);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with small size", () => {
    render(<Button title="Click me" size="small" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-4 py-2 w-full");
    expect(button).toHaveTextContent("Click me");
  });

  test("renders button with large size", () => {
    render(<Button title="Click me" size="large" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-8 py-3");
    expect(button).toHaveTextContent("Click me");
  });

  test("renders disabled button", () => {
    render(<Button title="Click me" disabled />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
