import React from "react";
import { render, screen } from "@testing-library/react";
import { CardSkeleton } from "./CardSkeleton";

test("CardSkeleton component renders correctly", () => {
  render(<CardSkeleton />);

  // Get the skeleton container element
  const skeletonContainer = screen.getByTestId("card-skeleton");

  // Check if the skeleton container has the appropriate classes
  expect(skeletonContainer).toHaveClass(
    "bg-gray-200 rounded-lg p-4 m-2 animate-pulse"
  );
});
