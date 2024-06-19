import { Dog } from "../shared/Interfaces";

export const extractUniqueGroups = (data: Dog[]): string[] => {
  const uniqueGroups = Array.from(
    new Set(data?.flatMap((dog) => dog?.breeds?.map((breed) => breed?.breed_group)))
  ).filter((group) => !!group);

  return uniqueGroups;
};
