import React, { useEffect, useState } from "react";
import { Dog } from "../../shared/Interfaces";
import { SearchBar } from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getDogsList } from "../../queries/getDogsList.queries";
import { CardSkeleton } from "../Card/CardSkeleton";
import { DropdownFilter } from "../Dropdown.tsx/DropdownFilter";
import { resetFilters } from "../../utils/resetFilters";
import { Button } from "../Button/Button";
import { filterData } from "../../utils/filterData";
import { extractUniqueGroups } from "../../utils/extractUniqueGroups";
import { paginateData } from "../../utils/paginateData";
import { DogCardList } from "./DogCardList";

export const DogBreeds: React.FC = () => {
  const [dogData, setDogData] = useState<Dog[]>([]);
  const [filteredData, setFilteredData] = useState<Dog[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage: number = 10;
  const [breedGroupOptions, setBreedGroupOptions] = useState<string[]>([]);
  const [selectedBreedGroup, setSelectedBreedGroup] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch data using useQuery
  const { data, isLoading, isError } = useQuery({
    queryFn: getDogsList,
    queryKey: ["dogs"],
  });

  useEffect(() => {
    // useEffect hook that runs when 'data' changes to set dog data and breed group options
    if (data) {
      setDogData(data?.data);
      const uniqueGroups = extractUniqueGroups(data?.data);
      setBreedGroupOptions(uniqueGroups);
    }
  }, [data]);

  const handleSearch = (query: string) => {
    // Handles the search functionality based on the entered query
    setSearchQuery(query);
    if (data && data?.data) {
      const filteredResults = filterData(data?.data, query, selectedBreedGroup);
      setFilteredData(filteredResults);
    }
    setCurrentPage(1);
  };

  const handleBreedGroupChange = (selectedValue: string) => {
    // Handles the change of selected breed group and filters the data accordingly
    setSelectedBreedGroup(selectedValue);
    if (data && data?.data) {
      const filteredResults = filterData(
        data?.data,
        searchQuery,
        selectedValue
      ); // Filter data based on search query and selected breed group
      setFilteredData(filteredResults);
      setCurrentPage(1);
    }
  };

  // Calculate paginated data for display based on current page and per page
  const paginatedData = paginateData<Dog>(
    data?.data || [],
    currentPage,
    perPage
  );
  const paginatedFilteredData = paginateData<Dog>(
    filteredData,
    currentPage,
    perPage
  );

  // Handle page change for pagination
  const handlePageChange = (newPage: number) => {
    // Handles the change of pagination page
    setCurrentPage(newPage);
  };

  const noFiltersApplied = !searchQuery && !selectedBreedGroup; // Check if no filters are selected

  // Function to render the loading state
  const renderLoadingState = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 mt-6">
      {[...Array(8)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );

  // Function to render the error state
  const renderErrorState = () => (
    <p className="text-textColor text-xl text-center pt-20 font-bold">
      Error fetching data
    </p>
  );

  // Function to render the dog card list or a "no results" message
  const renderDogCardListOrNoResults = () => {
    const isDataAvailable = filteredData.length > 0 || noFiltersApplied;

    if (isDataAvailable) {
      return (
        <DogCardList
          dogs={filteredData.length > 0 ? paginatedFilteredData : paginatedData}
        />
      );
    } else {
      return (
        <p className="text-textColor text-xl text-center p-20 font-bold">
          No results found for the selected filters.
        </p>
      );
    }
  };

  const handleResetFilters = () => {
    // Handles resetting all filters and search query
    resetFilters(
      setSearchQuery, // Reference to the input field for resetting its value
      setSelectedBreedGroup, // Function to reset the selected breed group
      setFilteredData, // Function to clear the filtered data
      setCurrentPage // Function to reset the current page number
    );
  };

  return (
    <section>
      <h1 className="text-xl md:text-3xl font-bold mb-10 text-textPrimary text-center">
        Search Dog Breed
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <SearchBar onSearch={handleSearch} />
        <DropdownFilter
          options={breedGroupOptions}
          selectedValue={selectedBreedGroup}
          onSelectChange={handleBreedGroupChange}
        />
        <Button
          outlined
          size="large"
          title="Reset Filters"
          className="ml:0 md:ml-8 md:mt-0 mt-6"
          onClick={handleResetFilters}
        />
      </div>
      {isLoading
        ? renderLoadingState()
        : isError
        ? renderErrorState()
        : renderDogCardListOrNoResults()}

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
};
