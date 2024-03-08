import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
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
    <div className="">
      <label htmlFor="searchInput" className="input input-bordered flex items-center gap-2 max-w-md mb-5">
        <input
          type="text"
          id="searchInput"
          className="grow"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <GoSearch />
      </label>
      <div className="">
        <Table data={filteredDrugs} handleItemSelect={onSelectItem} />
      </div>
    </div>
  );
}
