import { Dispatch, SetStateAction } from "react";
import { Dog } from "../shared/Interfaces";
import { getHeaders } from "./apiConfig";
import { extractUniqueGroups } from "./extractUniqueGroups";
import { filterData } from "./filterData";
import { paginateData } from "./paginateData";
import { resetFilters } from "./resetFilters";
const mockDogData: Dog[] = [
  {
    id: "1",
    url: "https://example.com/image1.jpg",
    width: 800,
    height: 600,
    breeds: [
      {
        breed_group: "Sporting",
        name: "Labrador Retriever",
        life_span: "10-12 years",
        weight: { imperial: "10-20 kg", metric: "5-10 kg" },
        height: { imperial: "30-40 cm", metric: "20-30 cm" },
        id: 1,
        temperament: "Friendly, Outgoing, Alert",
        reference_image_id: "abc123",
        bred_for: "Water retrieving",
      },
    ],
  },
];
// Test for the 'geHeaders' function
describe("all tests functions", () => {
  test("it should return the correct headers object", () => {
    const expectedHeaders = {
      "Content-Type": "application/json",
      "x-api-key":
        "live_SEcXM6wUlzc0SCQVkIZnxUELBSi0pWMJk6GKjRvWbDfxYPPqXSujUU1BvMxdbyoe",
    };

    expect(getHeaders()).toEqual(expectedHeaders);
  });

  // Test for the 'extractUniqueGroups' function
  test("it should return an array of unique breed groups", () => {
    const dogs: Dog[] = [
      {
        breeds: [
          {
            breed_group: "Sporting",
            weight: { imperial: "10-20 kg", metric: "5-10 kg" },
            height: { imperial: "30-40 cm", metric: "20-30 cm" },
            id: 1,
            name: "Labrador Retriever",
            life_span: "10-12 years",
            temperament: "Friendly, Outgoing, Alert",
            reference_image_id: "abc123",
            bred_for: "Water retrieving",
          },
        ],
        id: "1",
        url: "https://example.com/image1.jpg",
        width: 800,
        height: 600,
      },
    ];

    const expectedUniqueGroups = ["Sporting"];

    expect(extractUniqueGroups(dogs)).toEqual(expectedUniqueGroups);
  });

  // Test for the 'filterData' function
  test("it should filter dog data based on search query and breed group", () => {
    const searchQuery = "Labrador";
    const selectedBreedGroup = "Sporting";

    const filteredResults = filterData(
      mockDogData,
      searchQuery,
      selectedBreedGroup
    );

    const expectedResults: Dog[] = [
      {
        id: "1",
        url: "https://example.com/image1.jpg",
        width: 800,
        height: 600,
        breeds: [
          {
            breed_group: "Sporting",
            name: "Labrador Retriever",
            life_span: "10-12 years",
            weight: { imperial: "10-20 kg", metric: "5-10 kg" },
            height: { imperial: "30-40 cm", metric: "20-30 cm" },
            id: 1,
            temperament: "Friendly, Outgoing, Alert",
            reference_image_id: "abc123",
            bred_for: "Water retrieving",
          },
        ],
      },
    ];

    expect(filteredResults).toEqual(expectedResults);
  });

  // Mock data for testing
  const mockData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const currentPage = 2;
  const perPage = 3;

  // Test for the 'paginateData' function
  test("it should paginate the data correctly", () => {
    const paginatedData = paginateData(mockData, currentPage, perPage);

    const expectedSlice = mockData.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );

    expect(paginatedData).toEqual(expectedSlice);
  });

  // Mock state setter functions
  let setSearchQuery: Dispatch<SetStateAction<string>>;
  let setSelectedBreedGroup: Dispatch<SetStateAction<string>>;
  let setFilteredData: Dispatch<SetStateAction<Dog[]>>;
  let setCurrentPage: Dispatch<SetStateAction<number>>;

  beforeEach(() => {
    setSearchQuery = jest.fn();
    setSelectedBreedGroup = jest.fn();
    setFilteredData = jest.fn();
    setCurrentPage = jest.fn();
  });

  // Test for the 'resetFilters' function
  test("it should reset the filter states", () => {
    resetFilters(
      setSearchQuery,
      setSelectedBreedGroup,
      setFilteredData,
      setCurrentPage
    );

    // Assertions to check if the state setter functions were called with the expected values
    expect(setSelectedBreedGroup).toHaveBeenCalledWith("");
    expect(setFilteredData).toHaveBeenCalledWith([]);
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  test("it should reset the search query and breed group", () => {
    resetFilters(
      setSearchQuery,
      setSelectedBreedGroup,
      setFilteredData,
      setCurrentPage
    );

    // Log the arguments passed to setSearchQuery
    console.log("Arguments passed to setSearchQuery:", setSearchQuery);

    // Expectations
    expect(setSearchQuery).toHaveBeenCalledWith("");
    expect(setSelectedBreedGroup).toHaveBeenCalledWith("");
  });
});
