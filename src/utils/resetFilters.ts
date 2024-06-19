import { Dog } from "../shared/Interfaces";

export const resetFilters = (
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  setSelectedBreedGroup: React.Dispatch<React.SetStateAction<string>>,
  setFilteredData: React.Dispatch<React.SetStateAction<Dog[]>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  setSearchQuery("");
  setSelectedBreedGroup("");
  setFilteredData([]);
  setCurrentPage(1);
};
