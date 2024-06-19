import React from "react";
import { Dog } from "../../shared/Interfaces";

interface DogCardProps {
  dogData: Dog;
}

export const DetailsCard = ({ dogData }: DogCardProps) => {
  const { url, breeds } = dogData;
  const breed = breeds[0];

  return (
    <div className="flex flex-col lg:flex-row pb-6">
      <div className="w-full lg:w-1/2 flex-shrink-0 mb-6 lg:mb-0 justify-center items-center">
        <div className="w-full h-full lg:w-11/12  flex-shrink-0 mb-6 lg:mb-0 flex ">
          <img src={url} alt="Dog" className="rounded-lg w-full h-full" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <div className="w-full h-full lg:w-11/12  p-8 bg-bgPrimary text-textPrimary rounded-lg shadow-lg relative ">
          <h2 className="text-2xl font-bold mb-6">{breed?.name} Breed</h2>
          <p className="text-textColor mb-6">
            <span className="font-bold">Temperament: </span>
            {breed?.temperament || "Not specified"}
          </p>
          <p className="text-textColor mb-6">
            <span className="font-bold">Breed Group: </span>
            {breed?.breed_group || breed?.origin || "Not specified"}
          </p>
          <p className="text-textColor mb-6">
            <span className="font-bold">Life Span: </span>
            {breed?.life_span ? `${breed?.life_span} years` : "Not specified"}
          </p>
          <div className="text-textColor mb-6">
            {Object.entries(breed)?.map(([key, value]) => {
              if (key === "wikipedia_url" || !value) {
                return null;
              }

              const displayKey = key?.replace("_", " ");

              return (
                <p key={key} className="mb-6">
                  <span className="font-bold capitalize pr-2">
                    {displayKey}:
                  </span>
                  {typeof value === "object"
                    ? Object.values(value)?.join(" / ")
                    : value || "Not specified"}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
