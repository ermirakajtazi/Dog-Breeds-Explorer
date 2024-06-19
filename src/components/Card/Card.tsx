import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Dog } from "../../shared/Interfaces";
import { motion } from "framer-motion";

interface DogCardProps {
  dog: Dog;
}

export const Card = ({ dog }: DogCardProps) => {
  const { breeds, id, url } = dog;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 mt-6"
    >
      <div className="max-w-md mx-auto rounded-lg overflow-hidden h-auto md:max-w-xs md:w-auto">
        <img className="w-64 h-48 object-cover" src={url} alt={id} />
        <div className="w-64 h-auto py-6 px-8 text-textPrimary bg-bgPrimary flex flex-col justify-between">
          <div>
            <h2 className="font-xl font-semibold mb-2 line-clamp-1 overflow-hidden">
              <span className="text-textColor">Name: </span>
              {breeds[0]?.name || breeds[0]?.origin || "Unknown"}
            </h2>
            <p className="font-xl font-semibold mb-2 line-clamp-1 overflow-hidden">
              <span className="text-textColor">Breed: </span>
              {breeds[0]?.breed_group || "Unknown"}
            </p>
            <p className="mb-6 line-clamp-1 overflow-hidden">
              <span className="text-textColor">Life Span: </span>
              {breeds[0]?.life_span || "Unknown"}
            </p>
          </div>
          <div className="flex justify-end">
            <Link to={`/dog-details/${id}`}>
              <Button
                title="View Details"
                type="button"
                outlined
                testId="view-details"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
