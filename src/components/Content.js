import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import Table from "./Table";

export default function Content({ drugs, onSelectItem }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering the data based on the search query
  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8 flex items-center">
        <input
          type="text"
          id="searchInput"
          className="border border-gray-500 rounded-md py-2 px-8 focus:outline-none focus:ring focus:border-gray-500 w-full"
          placeholder="Search drugs..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <label htmlFor="searchInput" className="absolute inset-y-0 right-0 flex items-center pr-3">
          <GoSearch className="text-gray-500" />
        </label>
        
        {/* Checkout Button */}
        <button className="flex items-center justify-between gap-4 ml-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          <p>Checkout</p> <BsCart4 />
        </button>
      </div>
      <div className="">
        <Table data={filteredDrugs} handleItemSelect={onSelectItem} />
      </div>
    </>
  );
}
