import React, { useState } from "react";
import { Button } from "../Button/Button";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchBar = ({
  placeholder = "Search",
  onSearch,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (value: string) => {
    setSearchQuery(value);
  };
  return (
    <div className="flex flex-col md:flex-row">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleChange(e?.target?.value)}
        placeholder={placeholder}
        className="pl-5 p-3 md:px-0 md:pl-5 md:pr-20 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-primary w-full mr-0 md:mr-8 mb-6 md:mb-0"
      />
      <Button
        title="Search"
        size="large"
        onClick={handleSearch}
        testId="search"
      />
    </div>
  );
};
