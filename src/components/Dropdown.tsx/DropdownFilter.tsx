import React from "react";
interface DropdownFilterProps {
  options: string[];
  selectedValue: string;
  onSelectChange: (value: string) => void;
}
export const DropdownFilter = ({
  options,
  selectedValue,
  onSelectChange,
}: DropdownFilterProps) => {
  return (
    <>
      <select
        id="breedGroup"
        value={selectedValue}
        onChange={(e) => onSelectChange(e?.target?.value)}
        className="bg-primary text-white px-12 md:px-4 py-3 rounded-md outline-none ml-0 md:ml-8 mt-6 md:mt-0"
      >
        <option value="">Breed Group</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
