import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card } from "./Card";
import { Dog } from "../../shared/Interfaces";

describe("Card component", () => {
  const dogMock: Dog = {
    id: "By4A-eqVX",
    url: "dog-url.jpg",
    width: 800,
    height: 600,
    breeds: [
      {
        id: 1,
        name: "Bulldog",
        breed_group: "Non-Sporting",
        life_span: "8-10 years",
        weight: {
          imperial: "50-60",
          metric: "23-27",
        },
        height: {
          imperial: "50-60",
          metric: "23-27",
        },
        temperament: "Friendly",
        reference_image_id: "1234",
        bred_for: "Guarding",
      },
    ],
  };

  test("renders card with correct dog information", () => {
    render(
      <Router>
        <Card dog={dogMock} />
      </Router>
    );
    expect(document.body.innerHTML).toContain("Bulldog");
    expect(document.body.innerHTML).toContain("dog-url.jpg");
    expect(document.body.innerHTML).toContain("8-10 years");
    expect(document.body.innerHTML).toContain("Non-Sporting");

    // Check if the View Details button is present and has the correct text content
    expect(screen.getByText("View Details")).toBeInTheDocument();
    // Simulate click on the View Details button
    fireEvent.click(screen.getByTestId("view-details"));

    // Assert that the URL changes to dog-details
    expect(window.location.pathname).toBe("/dog-details/By4A-eqVX");
  });
});
