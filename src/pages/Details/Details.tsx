import React from "react";
import { DetailsCard } from "../../components/Card/DetailsCard";
import { Button } from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDogDetails } from "../../queries/getDogDetails.queries";

export const Details = () => {
  const { id } = useParams();
  const dogId = id || "";

  const {
    data: dogDetails,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getDogDetails(dogId),
    queryKey: ["dogDetails", dogId],
  });

  return (
    <section>
      <a href="/">
        <Button title="Go Back" type="button" testId="go-back" />
      </a>
      <p className="text-textPrimary py-10 text-xl font-semibold text-center">
        Dog Details
      </p>
      {isLoading && <p className="text-textColor text-3xl p-20">Loading...</p>}
      {isError && (
        <p className="text-textColor text-3xl p-20">Error fetching data</p>
      )}
      {dogDetails && <DetailsCard dogData={dogDetails} />}
    </section>
  );
};
