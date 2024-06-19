import React from "react";
import { Dog } from "../../shared/Interfaces";
import { Card } from "../Card/Card";
interface DogCardListProps {
  dogs: Dog[];
}

export const DogCardList = ({ dogs }: DogCardListProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 my-6">
    {dogs?.map((dog) => (
      <Card key={dog.id} dog={dog} />
    ))}
  </div>
);
