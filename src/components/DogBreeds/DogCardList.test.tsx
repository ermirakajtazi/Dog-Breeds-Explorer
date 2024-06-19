import React from "react";
import { render, screen } from "@testing-library/react";
import { DogCardList } from "./DogCardList";
import { Dog } from "../../shared/Interfaces";

// Mock the Card component
jest.mock("../Card/Card", () => ({
  __esModule: true,
  default: ({ dog }: { dog: Dog }) => <div data-testid={`card-${dog.id}`} />, // Mock Card component to return a div with a data-testid
}));

describe("DogCardList", () => {
  it("renders correctly with an empty list of dogs", () => {
    // Render the DogCardList component with an empty array of dogs
    render(<DogCardList dogs={[]} />);

    // Ensure there are no cards rendered
    const renderedCards = screen.queryAllByTestId(/^card-/);
    expect(renderedCards).toHaveLength(0);
  });
});
