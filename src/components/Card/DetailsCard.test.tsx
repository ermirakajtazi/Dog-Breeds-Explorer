import React from "react";
import { render, screen } from "@testing-library/react";
import { DetailsCard } from "./DetailsCard";
import { Dog } from "../../shared/Interfaces";

const dogDataMock: Dog = {
  id: "1",
  url: "dog-url.jpg",
  width: 800,
  height: 600,
  breeds: [
    {
      id: 1,
      name: "Bulldog",
      temperament: "Friendly",
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
      reference_image_id: "1234",
      bred_for: "Guarding",
    },
  ],
};

test("DetailsCard component renders correctly with provided dog data", () => {
  render(<DetailsCard dogData={dogDataMock} />);

  expect(screen.getByAltText("Dog")).toBeInTheDocument();

  expect(document.body.innerHTML).toContain("Friendly");
  expect(document.body.innerHTML).toContain("Non-Sporting");
  expect(document.body.innerHTML).toContain("8-10 years");
  expect(document.body.innerHTML).toContain("50-60 / 23-27");
});
