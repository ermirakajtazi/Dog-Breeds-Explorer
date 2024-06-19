import { Dog } from "../shared/Interfaces";

export const filterData = (
  dogData: Dog[],
  searchQuery: string,
  selectedBreedGroup: string
): Dog[] => {
  const filteredResults = dogData?.filter((dog) => {
    return dog?.breeds?.some((breed) => {
      const includesQuery = (query: string) =>
        query && query?.toLowerCase().includes(searchQuery?.toLowerCase());
      return (
        (!selectedBreedGroup || breed?.breed_group === selectedBreedGroup) &&
        (includesQuery(breed?.name) ||
          includesQuery(breed?.breed_group) ||
          includesQuery(breed?.life_span))
      );
    });
  });
  return filteredResults;
};
